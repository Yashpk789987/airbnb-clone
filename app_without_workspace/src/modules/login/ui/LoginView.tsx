import * as React from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { LoginSchema } from "@airbnb/common";
import { InputField } from "../../shared/InputField";
import { Button, Card, Text } from "react-native-elements";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Card>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
          <Field
            containerStyle={{ width: "102%" }}
            name="email"
            placeholder="Email"
            component={InputField}
          />
          <Field
            containerStyle={{ width: "102%" }}
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
          />
          <View style={{ marginTop: 30 }}>
            <Button title="Register" onPress={handleSubmit as any} />
          </View>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: LoginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
