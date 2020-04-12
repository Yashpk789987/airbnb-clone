// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  SearchListingQuery,
  SearchListingQueryVariables,
  SearchListingQuery_searchListings,
} from "./__generated__/SearchListingQuery";

export const searchListingQuery = gql`
  query SearchListingQuery(
    $input: SearchListingInput!
    $offset: Int!
    $limit: Int!
  ) {
    searchListings(input: $input, offset: $offset, limit: $limit) {
      id
      name
      beds
      guests
      category
      description
      price
      latitude
      longitude
      amenities
      pictureUrl
      owner {
        email
        id
      }
    }
  }
`;

export interface WithSearchListing {
  listings: SearchListingQuery_searchListings[];
  loading: boolean;
}

interface Props {
  variables: SearchListingQueryVariables;
  children: (data: WithSearchListing) => JSX.Element | null;
}

export class SearchListing extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<SearchListingQuery, SearchListingQueryVariables>
        query={searchListingQuery}
        variables={variables}
      >
        {({ data, loading }) => {
          let listings: SearchListingQuery_searchListings[] = [];

          if (data && data.searchListings) {
            listings = data.searchListings;
          }

          return children({
            listings,
            loading,
          });
        }}
      </Query>
    );
  }
}
