import React, { Component } from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";

export class ForgotPasswordConnector extends Component<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/reset-email", {
      message: "Check Your Email To Reset Password"
    });
  };
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: any) => (
          <ForgotPasswordView onFinish={this.onFinish} submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
