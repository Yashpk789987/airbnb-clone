import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  LoginMutation,
  LoginMutationVariables
} from "./__generated__/LoginMutation";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (data: {
    submit: (
      values: LoginMutationVariables
    ) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values);
    const {
      data: {
        login: { errors, sessionId }
      }
    }: any = await this.props.mutate({
      variables: values
    });
    console.log("errors: ", errors);
    console.log("sessionId", sessionId);
    if (errors) {
      return normalizeErrors(errors);
    }
    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId);
    }
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(C) as React.ComponentClass;
