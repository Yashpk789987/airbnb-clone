import "reflect-metadata";
import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import { RedisPubSub } from "graphql-redis-subscriptions";

import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as RateLimit from "express-rate-limit";
import * as RateLimitRedisStore from "rate-limit-redis";
import * as express from "express";

import { userLoader } from "./loaders/UserLoader";
import { redis } from "./redis";
import { createTypeormConn } from "./utils/createTypeormConn";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix, listingCacheKey } from "./constants";
import { createTestConn } from "./testUtils/createTestConn";
import { applyMiddleware } from "graphql-middleware";
import { middleware } from "./middleware";
import { Listing } from "./entity/Listing";

const SESSION_SECRET = "Reactnative@2018";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema() as any;
  applyMiddleware(schema, middleware);
  const pubsub = new RedisPubSub(
    process.env.NODE_ENV === "production"
      ? {
          connection: process.env.REDIS_URL as any,
        }
      : {}
  );
  const server = new GraphQLServer({
    schema,
    context: ({ request, response }) => ({
      redis,
      url: request ? request.protocol + "://" + request.get("host") : "",
      session: request ? request.session : undefined,
      req: request,
      res: response,
      userLoader: userLoader(),
      pubsub,
    }),
  });

  server.express.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis,
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0, // disable delaying - full speed until the max limit is reached
    })
  );

  server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix,
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    } as any)
  );

  server.express.use("/images", express.static("images"));
  console.log("frontend", process.env.FRONTEND_HOST);
  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string),
  };

  server.express.get("/confirm/:id", confirmEmail);

  server.express.set("trust proxy", 1); // For Cookies Working

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    await createTypeormConn();
    // await conn.runMigrations();
  }

  // clear cache
  redis.del(listingCacheKey);
  // fill cache
  const listings = await Listing.find();
  const listingStrings = listings.map((l) => JSON.stringify(l));
  console.log("Before L Push");
  try {
    await redis.lpush(listingCacheKey, ...listingStrings);
  } catch (error) {
    console.log("starting server and booting redis cache error::", error);
    console.log("This Error is there because listings is empty in database");
    await redis.lpush(listingCacheKey, []);
  }
  console.log("After L Push");

  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port,
  });
  console.log("Server is running on localhost:4000");

  return app;
};
