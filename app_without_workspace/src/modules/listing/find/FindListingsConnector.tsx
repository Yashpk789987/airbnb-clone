import React, { Component } from "react";

import { withFindListings, WithFindListings } from "@airbnb/controller";
import { Text, Card, Icon, Button } from "react-native-elements";
import { ScrollView } from "react-native";

class C extends Component<WithFindListings> {
  render() {
    const { listings } = this.props;
    return (
      <ScrollView style={{ marginTop: 15 }}>
        {listings.map((l) => (
          <Card
            key={`${l.id}-flc`}
            title={l.name}
            image={l.pictureUrl ? { uri: l.pictureUrl } : undefined}
          >
            <Text style={{ marginBottom: 10 }}>Owner: {l.owner.email}</Text>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

export const FindListingsConnector = withFindListings(C);
