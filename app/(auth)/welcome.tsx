import { Text } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text> Welcome Page </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Welcome;
