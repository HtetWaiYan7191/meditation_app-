import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerStyle: { backgroundColor: "blue" } }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "gray" },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
