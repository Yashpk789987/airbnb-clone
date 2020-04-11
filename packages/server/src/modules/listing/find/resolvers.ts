import { ResolverMap } from "../../../types/graphql-utils";
import { listingCacheKey } from "../../../constants";
// import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Listing: {
    pictureUrl: (parent, _, { url }) => {
      if (!parent.pictureUrl) {
        return parent.pictureUrl;
      }
      if (parent.pictureUrl.includes("http")) {
        return parent.pictureUrl;
      }
      if (parent.pictureUrl.includes("data:image")) {
        return parent.pictureUrl;
      }

      return `${url}/images/${parent.pictureUrl}`;
    },
    owner: ({ userId }, _, { userLoader }) => {
      return userLoader.load(userId);
    },
  },
  Query: {
    findListings: async (_, __, { redis }) => {
      // REDIS VS DB SEARCHING PERFORMANCE COMPARISON
      // console.time("redis");
      // const listings = (await redis.lrange(listingCacheKey, 0, -1)) || [];
      // const result = listings.map((x: string) => JSON.parse(x));
      // console.timeEnd("redis");
      // console.time("db");
      // await Listing.find();
      // console.timeEnd("db");
      const listings = (await redis.lrange(listingCacheKey, 0, -1)) || [];
      const result = listings.map((x: string) => JSON.parse(x));
      return result;
    },
  },
};
