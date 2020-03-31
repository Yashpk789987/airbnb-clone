import React, { Component } from "react";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@airbnb/controller";

export class ChangePasswordConnector extends Component<
  RouteComponentProps<{ key: string }>
> {
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
            // tslint:disable-next-line:jsx-no-lambda
            submit={({ newPassword }) => submit({ key, newPassword })}
          />
        )}
      </ChangePasswordController>
    );
  }
}
