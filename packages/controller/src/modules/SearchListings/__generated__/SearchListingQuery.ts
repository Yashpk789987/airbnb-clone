/* tslint:disable */
// This file was automatically generated and should not be edited.

export interface SearchListingInput {
  guests?: number | null;
  beds?: number | null;
  name?: string | null;
}

// ====================================================
// GraphQL query operation: SearchListingQuery
// ====================================================

export interface SearchListingQuery_searchListings_owner {
  email: string;
  id: string;
}

export interface SearchListingQuery_searchListings {
  id: string;
  name: string;
  beds: number;
  guests: number;
  category: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
  amenities: string[];
  pictureUrl: string | null;
  owner: SearchListingQuery_searchListings_owner;
}

export interface SearchListingQuery {
  searchListings: SearchListingQuery_searchListings[];
}

export interface SearchListingQueryVariables {
  input: SearchListingInput;
  offset: number;
  limit: number;
}
