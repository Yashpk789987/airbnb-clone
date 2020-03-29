import * as React from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";
import { Button } from "react-native-elements";

export class RegisterConnector extends React.PureComponent {
  onPress = () => {
    console.log("button pressed");
  };

  render() {
    return (
      <View style={styles.androidHeader}>
        <Button title="BUTTON" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
