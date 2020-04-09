// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewMessagesQuery_messages,
  ViewMessagesQuery,
  ViewMessagesQueryVariables,
} from "./__generated__/ViewMessagesQuery";

export const viewMessagesQuery = gql`
  query ViewMessagesQuery($listingId: String!) {
    messages(listingId: $listingId) {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export interface WithViewMessages {
  messages: ViewMessagesQuery_messages[] | null;
  loading: boolean;
}

interface Props {
  listingId: string;
  children: (data: WithViewMessages) => JSX.Element | null;
}

export class ViewMessages extends React.PureComponent<Props> {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query<ViewMessagesQuery, ViewMessagesQueryVariables>
        query={viewMessagesQuery}
        variables={{ listingId }}
      >
        {({ data, loading }) => {
          let messages: ViewMessagesQuery_messages[] = [];

          if (data && data.messages) {
            messages = data.messages as any;
          }

          return children({
            messages,
            loading,
          } as any);
        }}
      </Query>
    );
  }
}
