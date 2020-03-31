import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  ForgotPasswordChange,
  ForgotPasswordChangeVariables
} from "./__generated__/ForgotPasswordChange";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (data: {
    submit: (
      values: ForgotPasswordChangeVariables
    ) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, ForgotPasswordChange, ForgotPasswordChangeVariables>
> {
  submit = async (values: ForgotPasswordChangeVariables) => {
    console.log(values);
    const {
      data: { forgotPasswordChange }
    }: any = await this.props.mutate({
      variables: values
    });
    console.log("response: ", forgotPasswordChange);
    if (forgotPasswordChange) {
      return normalizeErrors(forgotPasswordChange);
    }
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit } as any);
  }
}

const forgotPasswordChangeMutation = gql`
  mutation ForgotPasswordChange($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
  Props,
  ForgotPasswordChange,
  ForgotPasswordChangeVariables
>(forgotPasswordChangeMutation)(C) as React.ComponentClass;
