import { ResolverMap } from "../../../types/graphql-utils";

import { Message } from "../../../entity/Message";

export const resolvers: ResolverMap = {
  Message: {
    user: ({ userId }, _, { userLoader }) => {
      return userLoader.load(userId);
    },
  },
  Query: {
    messages: async (_, { listingId }, { session }) => {
      const messages = Message.find({
        where: {
          listingId,
          userId: session.userId,
        },
      });
      return messages;
    },
  },
};
