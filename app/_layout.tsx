import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store, useAppSelector } from "../redux/store";
import { NativeBaseProvider } from "native-base";
import { theme } from "@/services/theme";
import { selectIsSignedIn } from "@/redux/auth/authSlice";

const AppContent = () => {
  const isSignedIn = useAppSelector(selectIsSignedIn);
  console.log(isSignedIn);
  return (
    <SafeAreaProvider>
      {isSignedIn ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
        </Stack>
      )}
    </SafeAreaProvider>
  );
};
const RootLayout = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppContent />
      </NativeBaseProvider>
    </Provider>
  );
};

export default RootLayout;
