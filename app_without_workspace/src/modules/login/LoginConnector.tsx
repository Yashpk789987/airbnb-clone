import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-native";

export class LoginConnector extends React.PureComponent<RouteComponentProps> {
  onFinish = () => {
    this.props.history.push("/me");
  };
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    );
  }
}
