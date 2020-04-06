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
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={l.name} description="www.instagram.com" />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingConnector = withFindListings(C);
