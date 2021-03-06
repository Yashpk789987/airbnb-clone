import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

export const InputField: React.SFC<FieldProps<any> & {
  label?: string;
  useNumberComponent?: boolean;
}> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const Comp = useNumberComponent ? InputNumber : (Input as any);
  return (
    <FormItem
      label={label}
      help={errorMsg}
      validateStatus={errorMsg ? "error" : undefined}
    >
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (newValue: string) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  );
};
