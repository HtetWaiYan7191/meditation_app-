import { AppScreen } from "@/components/common";
import useThemeColor from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import { Text } from "native-base";
import React from "react";

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

export default Welcome;
