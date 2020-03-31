import React, { Component } from "react";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb/controller";

export class ChangePasswordConnector extends Component<
  RouteComponentProps<{ key: string }>
> {
  onFinish = () => {
    this.props.history.push("/login");
  };
  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    return (
      <ChangePasswordController>
        {({ submit }: any) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            token={key}
            submit={submit}
          />
        )}
      </ChangePasswordController>
    );
  }
}
