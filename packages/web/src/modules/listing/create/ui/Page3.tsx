import * as React from "react";

import { Field } from "formik";
import { InputField } from "../../../../modules/shared/InputField";
import { TagField } from "../../../../modules/shared/TagField";

export const Page3 = () => (
  <React.Fragment>
    <Field
      name="latitude"
      label="Latitude"
      placeholder="Latitude"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      name="longitude"
      label="Longitude"
      placeholder="Longitude"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      style={{ width: "100%" }}
      name="amenities"
      placeholder="Amenities"
      component={TagField}
    />
  </React.Fragment>
);
