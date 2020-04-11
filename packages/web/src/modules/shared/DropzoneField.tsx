import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";
import { Button } from "antd";
export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name, value }, // { name, value, onChange, onBlur }
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const pUrl = (value ? value.preview : null) || values.pictureUrl;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
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

      {pUrl && (
        <>
          <img
            style={{ paddingLeft: "2%", paddingBottom: "1%" }}
            height="200"
            width="200"
            src={pUrl}
          />
          <br />
          <Button
            style={{
              position: "absolute",
              right: "0%",
            }}
            // tslint:disable-next-line jsx-no-lambda
            onClick={() =>
              setValues({
                ...values,
                pictureUrl: null,
                picture: null,
              })
            }
          >
            Remove
          </Button>
        </>
      )}
    </div>
  );
};
