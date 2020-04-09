import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    viewListing: async (_: any, { id }: any) => {
      return Listing.findOne({ where: { id } });
    },
  },
};
