import * as React from "react";

import { Field } from "formik";
import { TagField } from "../../../shared/TagField";
import { LocationField } from "../../../shared/LocationField";

export const Page3 = () => (
  <React.Fragment>
    <Field name="tmp" component={LocationField} />

    <Field
      style={{ width: "100%" }}
      name="amenities"
      placeholder="Amenities"
      component={TagField}
    />
  </React.Fragment>
);
