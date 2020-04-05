import * as React from "react";

import { Field } from "formik";
import { InputField } from "../../../../modules/shared/InputField";

export const Page2 = () => (
  <React.Fragment>
    <Field
      label="Price"
      name="price"
      placeholder="Price"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      name="beds"
      placeholder="Beds"
      label="Beds"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      name="guests"
      placeholder="Guests"
      label="Guests"
      component={InputField}
      useNumberComponent={true}
    />
  </React.Fragment>
);
