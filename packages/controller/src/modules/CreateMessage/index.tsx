// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  CreateMessageMutation,
  CreateMessageMutationVariables,
} from "./__generated__/CreateMessageMutation";

export const createMessageMutation = gql`
  mutation CreateMessageMutation($message: MessageInput!) {
    createMessage(message: $message)
  }
`;

export interface WithCreateMesssage {
  createMessage: MutationFn<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >;
}

interface Props {
  children: (data: WithCreateMesssage) => JSX.Element | null;
}

export class CreateMessage extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<CreateMessageMutation, CreateMessageMutationVariables>
        mutation={createMessageMutation}
      >
        {(mutate) => {
          return children({
            createMessage: mutate,
          } as any);
        }}
      </Mutation>
    );
  }
}
