import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

export class TextPage extends Component<RouteComponentProps<{}>> {
  render() {
    const {
      location: { state }
    }: any = this.props;
    return <h2>{state && state.message ? state.message : "hello"}</h2>;
  }
}
