/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: newMessageSubscription
// ====================================================

export interface newMessageSubscription_newMessage_user {
  id: string;
  email: string;
}

export interface newMessageSubscription_newMessage {
  text: string;
  user: newMessageSubscription_newMessage_user;
  listingId: string;
}

export interface newMessageSubscription {
  newMessage: newMessageSubscription_newMessage;
}

export interface newMessageSubscriptionVariables {
  listingId: string;
}
