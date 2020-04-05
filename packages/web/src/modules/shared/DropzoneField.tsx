import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name }, // { name, value, onChange, onBlur }
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dropzone
      accept="image/jpeg, image/png"
      multiple={false}
      // tslint:disable-next-line jsx-no-lambda
      onDrop={([file]) => {
        console.log(file);
        setFieldValue(name, file);
      }}
      {...props}
    >
      <p>Try Dopping Some Files Here .. Or click to Upload Files</p>
    </Dropzone>
  );
};
