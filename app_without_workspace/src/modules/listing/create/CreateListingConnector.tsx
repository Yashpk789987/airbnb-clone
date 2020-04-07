import * as React from "react";

import { Formik, Field } from "formik";

import { withCreateListing, WithCreateListing } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-native";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import { InputField } from "../../shared/InputField";
import { Button } from "react-native-elements";

interface FormValues {
  picture: null;
  name: string;
  category: string;
  description: string;
  price: string;
  beds: string;
  guests: string;
  latitude: string;
  longitude: string;
  amenities: string[];
}

class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    values: FormValues
    // { setSubmitting }: FormikActions<FormValues>
  ) => {
    console.log(values);
    // await this.props.createListing(values);
    // setSubmitting(false);
  };

  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          picture: null,
          name: "",
          category: "",
          description: "",
          price: "0",
          beds: "0",
          guests: "0",
          latitude: "0",
          longitude: "0",
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {({ handleSubmit, isSubmitting, values }) => {
          console.log(values);
          return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <ScrollView style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 30, marginBottom: 10 }}>
                  Create Listing
                </Text>

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="name"
                  placeholder="Name"
                  component={InputField}
                />
                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="category"
                  placeholder="Category"
                  component={InputField}
                />
                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="description"
                  placeholder="Description"
                  component={InputField}
                />

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  label="Price"
                  name="price"
                  placeholder="Price"
                  component={InputField}
                  keyboardType="numeric"
                />

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="beds"
                  placeholder="Beds"
                  label="Beds"
                  component={InputField}
                  keyboardType="numeric"
                />

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="guests"
                  placeholder="Guests"
                  label="Guests"
                  component={InputField}
                  keyboardType="numeric"
                />

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="latitude"
                  label="Latitude"
                  placeholder="Latitude"
                  component={InputField}
                  keyboardType="numeric"
                />

                <Field
                  containerStyle={{ width: "102%", padding: "3%" }}
                  name="longitude"
                  label="Longitude"
                  placeholder="Longitude"
                  component={InputField}
                  keyboardType="numeric"
                />

                {/* <Field
                  containerStyle={{ width: "102%" }}
                  style={{ width: "100%" }}
                  name="amenities"
                  placeholder="Amenities"
                  component={TagField}
                /> */}

                <View
                  style={{
                    marginTop: "7%",
                    marginBottom: "10%",
                    height: "15%",
                  }}
                >
                  <Button onPress={handleSubmit as any} title="save listing" />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
