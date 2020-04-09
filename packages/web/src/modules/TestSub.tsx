import React, { Component } from "react";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

const SUB = gql`
  subscription {
    newMessage(listingId: "0d67e507-2f25-4005-a8e6-8adb10cebf36") {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export class TestSub extends Component {
  render() {
    return (
      <Subscription subscription={SUB}>
        {(data: any) => {
          console.log(data);

          return null;
        }}
      </Subscription>
    );
  }
}
