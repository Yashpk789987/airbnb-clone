import * as React from "react";
import { ViewListing, UpdateListing } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";
import { ListingForm, defaultListingFormValues } from "../shared/ListingForm";

export class EditListingConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { listingId },
      },
    } = this.props;
    return (
      <ViewListing listingId={listingId}>
        {(data: any) => {
          console.log(data);
          if (!data.listing) {
            return <div>...loading</div>;
          }

          const { id: _, owner: ___, ...listing } = data.listing;

          return (
            <UpdateListing>
              {({ updateListing }) => (
                <ListingForm
                  initialValues={{
                    ...defaultListingFormValues,
                    ...listing,
                  }}
                  // tslint:disable-next-line:jsx-no-lambda
                  submit={async (values) => {
                    const { __typename: ____, ...newValues } = values as any;

                    if (newValues.pictureUrl) {
                      const parts = newValues.pictureUrl.split("/");
                      newValues.pictureUrl = parts[parts.length - 1];
                    }

                    const result = await updateListing({
                      variables: {
                        input: newValues,
                        listingId,
                      },
                    });

                    console.log(result);
                  }}
                />
              )}
            </UpdateListing>
          );
        }}
      </ViewListing>
    );
  }
}
