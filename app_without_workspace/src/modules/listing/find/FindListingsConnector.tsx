import React from "react";

import { Text, Card } from "react-native-elements";
import { ScrollView, TextInput, View } from "react-native";
import { SearchListing } from "@airbnb/controller";

interface State {
  name: string;
}

export class FindListingsConnector extends React.PureComponent<{}, State> {
  state = {
    name: "",
  };
  render() {
    const { name } = this.state;
    return (
      <>
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={{ fontSize: 20, width: "100%" }}
            placeholder="search..."
            onChangeText={(text) => this.setState({ name: text })}
            value={name}
          />
          <SearchListing
            variables={{ input: { beds: 1, name }, limit: 5, offset: 0 }}
          >
            {({ listings }) => (
              <ScrollView style={{ marginTop: 15 }}>
                {listings.map((l) => (
                  <Card
                    key={`${l.id}-flc`}
                    title={l.name}
                    image={l.pictureUrl ? { uri: l.pictureUrl } : undefined}
                  >
                    <Text style={{ marginBottom: 10 }}>
                      Owner: {l.owner.email}
                    </Text>
                  </Card>
                ))}
              </ScrollView>
            )}
          </SearchListing>
        </View>
      </>
    );
  }
}
