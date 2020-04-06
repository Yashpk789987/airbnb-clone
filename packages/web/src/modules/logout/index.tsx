import React, { Component } from "react";
import { LogoutController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";

import { CallLogout } from "./CallLogout";

export class Logout extends Component<RouteComponentProps<{}>> {
  onFinish = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <LogoutController>
        {({ logout }) => (
          <CallLogout onFinish={this.onFinish} logout={logout} />
        )}
      </LogoutController>
    );
  }
}
