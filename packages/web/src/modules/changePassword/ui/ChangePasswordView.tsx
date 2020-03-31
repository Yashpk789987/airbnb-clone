import * as React from "react";
import { Form as AntForm, Button, Icon } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../../shared/InputField";

import { NormalizedErrorMap } from "@airbnb/controller";
import { changePasswordSchema } from "@airbnb/common";

const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="newPassword"
            type="password"
            prefix={
              (<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />) as any
            }
            placeholder="New Password"
            component={InputField}
          />

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
