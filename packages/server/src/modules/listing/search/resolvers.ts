import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Query: {
    searchListings: async (
      _,
      { input: { guests, beds, name }, limit, offset }
    ) => {
      let listingQB = getConnection()
        .getRepository(Listing)
        .createQueryBuilder("l");
      if (guests) {
        listingQB = listingQB.andWhere("l.guests = :guests", { guests });
      }
      if (beds) {
        listingQB = listingQB.andWhere("l.beds = :beds", { beds });
      }
      if (name) {
        listingQB = listingQB.andWhere("l.name ilike :name", {
          name: `%${name}%`,
        });
      }
      return listingQB.limit(limit).offset(offset).getMany();
    },
  },
};
