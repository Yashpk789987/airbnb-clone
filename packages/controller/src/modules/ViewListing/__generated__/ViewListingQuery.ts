/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewListingQuery
// ====================================================

export interface ViewListingQuery_viewListing_owner {
  id: string;
  email: string;
}

export interface ViewListingQuery_viewListing {
  id: string;
  name: string;
  category: string;
  pictureUrl: string;
  owner: ViewListingQuery_viewListing_owner;
}

export interface ViewListingQuery {
  viewListing: ViewListingQuery_viewListing | null;
}

export interface ViewListingQueryVariables {
  id: string;
}
