import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(
            {
              extra: Constants.manifest.extra,
            },
            null,
            2
          )}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
