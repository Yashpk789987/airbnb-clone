import * as React from "react";
import { RegisterController } from "@airbnb/controller";

import { RegisterView } from "./ui/RegisterView";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "Check Your Email To Confirm Your Account"
    });
  };
  render() {
    return (
      <RegisterController>
        {({ submit }: any) => (
          <RegisterView onFinish={this.onFinish} submit={submit} />
        )}
      </RegisterController>
    );
  }
}
