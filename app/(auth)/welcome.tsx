import useThemeColor from "@/hooks/useThemeColor";
import { selectAppTheme } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/store";
import { theme } from "@/services/theme";
import { Text } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";

function Welcome() {
  // Ensure appTheme is typed as "light" | "dark"
  const currentTheme = useThemeColor();

  return (
    <View style={styles.container}>
      <Text color={currentTheme.tint}>Welcome Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add any custom styles here
  },
});

export default Welcome;
