/* tslint:disable */
// This file was automatically generated and should not be edited.

export interface MessageInput {
  text: string;
  listingId: string;
}
// ====================================================
// GraphQL mutation operation: CreateMessageMutation
// ====================================================

export interface CreateMessageMutation {
  createMessage: boolean;
}

export interface CreateMessageMutationVariables {
  message: MessageInput;
}
