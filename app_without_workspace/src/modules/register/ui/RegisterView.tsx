import * as React from "react";

import { View, Button, StyleSheet, Platform, StatusBar } from "react-native";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { userValidationSchema } from "@airbnb/common";
import { InputField } from "../../shared/InputField";

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
      <View style={[styles.androidHeader, { width: 400, margin: "auto" }]}>
        <Field name="email" placeholder="Email" component={InputField} />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField}
        />
        <Button title="Register" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: userValidationSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
