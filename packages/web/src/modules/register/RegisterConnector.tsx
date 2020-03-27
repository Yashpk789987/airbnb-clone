import React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnb/controller";

export class RegisterConnector extends React.Component {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
