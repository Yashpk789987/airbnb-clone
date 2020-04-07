import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-native";
// import * as SecureStore from "expo-secure-store";
// import { SID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent<RouteComponentProps> {
  // onSessionId = async (sid: string) => {
  //   SecureStore.setItemAsync(SID_KEY, sid);
  // };
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
