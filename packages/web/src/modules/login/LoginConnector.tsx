import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state }
    }: any = this.props;
    if (state && state.next) {
      return history.push(state.next);
    }
    history.push("/");
  };

  render() {
    return (
      <LoginController>
        {({ submit }: any) => (
          <LoginView onFinish={this.onFinish} submit={submit} />
        )}
      </LoginController>
    );
  }
}
