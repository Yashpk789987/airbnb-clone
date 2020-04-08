import { ResolverMap } from "../../../types/graphql-utils";
import { PUBSUB_NEW_MESSAGE } from "../shared/constants";

export const resolvers: ResolverMap = {
  Subscription: {
    newMessage: {
      subscribe: (_: any, __: any, { pubsub }: any) => {
        return pubsub.asyncIterator(PUBSUB_NEW_MESSAGE);
      },
    },
  } as any,
};
