import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUploadFile";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, ...data } }, { session }) => {
      const pictureUrl = picture ? await processUpload(picture) : null;
      await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId,
      }).save();
      return true;
    },
  },
};
