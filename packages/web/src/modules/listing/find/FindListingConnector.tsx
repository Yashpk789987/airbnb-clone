import React, { Component } from "react";
import { Card } from "antd";
import { withFindListings, WithFindListings } from "@airbnb/controller";
import { Link } from "react-router-dom";

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
            <Link to={`listing/${l.id}`}>
              <Meta title={l.name} description={l.owner.email} />
            </Link>
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingConnector = withFindListings(C);
