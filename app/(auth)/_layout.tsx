import { Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}

export default AuthLayout;
