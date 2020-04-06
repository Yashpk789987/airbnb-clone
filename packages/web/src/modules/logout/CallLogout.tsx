import React, { Component } from "react";

interface Props {
  logout: () => void;
  onFinish: () => void;
}

export class CallLogout extends Component<Props> {
  async componentDidMount() {
    await this.props.logout();
    this.props.onFinish();
  }

  render() {
    return null;
  }
}
