import { AppScreen } from "@/components/common";
import useThemeColor from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import { Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

function Welcome() {
  // Ensure appTheme is typed as "light" | "dark"
  const currentTheme = useThemeColor();

  return (
    <AppScreen>
      <Text color={currentTheme.tint}>Welcome Page</Text>
      <Link href={"/sign-in"}>Go to sign in page </Link>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add any custom styles here
  },
});

export default Welcome;
