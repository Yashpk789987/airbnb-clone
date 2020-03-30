import React, { Component } from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb/controller";

export class ForgotPasswordConnector extends Component {
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: any) => <ForgotPasswordView submit={submit} />}
      </ForgotPasswordController>
    );
  }
}
