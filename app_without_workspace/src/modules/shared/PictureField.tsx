import * as React from "react";
import { FieldProps } from "formik";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { ReactNativeFile } from "apollo-upload-client";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

export class PictureField extends React.Component<
  FieldProps<any> & {
    title: string;
  }
> {
  onPress = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
    const imageResult = await ImagePicker.launchImageLibraryAsync({});
    if (!imageResult.cancelled) {
      const { type, uri } = imageResult;
      const customType =
        Platform.OS === "android" ? type + `/${uri.split(".")[1]}` : type;
      const file = new ReactNativeFile({
        uri: imageResult.uri,
        type: customType,
        name: "picture",
      });
      const {
        field: { name },
        form: { setFieldValue },
      } = this.props;
      setFieldValue(name, file);
    }
  };
  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: _, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;

    return (
      <Button {...props} style={{ height: "10%" }} onPress={this.onPress} />
    );
  }
}
