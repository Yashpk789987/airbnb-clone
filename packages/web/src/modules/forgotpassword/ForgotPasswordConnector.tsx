import React, { Component } from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <ForgotPasswordView submit={this.dummySubmit} />;
  }
}
