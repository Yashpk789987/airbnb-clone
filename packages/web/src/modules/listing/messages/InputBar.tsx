import * as React from "react";
import { Formik, Form, Field } from "formik";
import { CreateMessage } from "@airbnb/controller";
import { InputField } from "../../shared/InputField";

interface FormValues {
  text: string;
}

interface Props {
  listingId: string;
}

export class InputBar extends React.PureComponent<Props> {
  render() {
    const { listingId } = this.props;
    return (
      <CreateMessage>
        {({ createMessage }: any) => (
          <Formik<{}, FormValues>
            initialValues={{ text: "" }}
            // tslint:disable-next-line:jsx-no-lambda
            onSubmit={async ({ text }, { resetForm }) => {
              await createMessage({
                variables: {
                  message: {
                    text,
                    listingId,
                  },
                },
              });
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Field name="text" component={InputField} />
                <button type="submit">send message</button>
              </Form>
            )}
          </Formik>
        )}
      </CreateMessage>
    );
  }
}
