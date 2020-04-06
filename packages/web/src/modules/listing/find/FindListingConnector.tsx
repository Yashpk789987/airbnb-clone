import React, { Component } from "react";
import { Card } from "antd";
import { withFindListings, WithFindListings } from "@airbnb/controller";

const { Meta } = Card;

class C extends Component<WithFindListings> {
  render() {
    const { listings, loading } = this.props;

    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map((l) => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={
              l.pictureUrl && <img alt="listing-image" src={l.pictureUrl} />
            }
          >
            <Meta title={l.name} description={l.owner.email} />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingConnector = withFindListings(C);
