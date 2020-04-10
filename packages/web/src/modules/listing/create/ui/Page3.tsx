import * as React from "react";

import { Field } from "formik";
import { TagField } from "../../../../modules/shared/TagField";
import { LocationField } from "../../../../modules/shared/LocationField";

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
