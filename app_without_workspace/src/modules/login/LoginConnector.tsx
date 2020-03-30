import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";
import * as SecureStore from "expo-secure-store";
import { SID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent {
  onSessionId = async (sid: string) => {
    SecureStore.setItemAsync(SID_KEY, sid);
  };
  render() {
    return (
      <LoginController onSessionId={this.onSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
