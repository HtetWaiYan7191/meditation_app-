import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Home" }}
      />
      <Stack.Screen
        name="subhome"
        options={{ headerShown: true, title: "Detail" }}
      />
    </Stack>
  );
};

export default HomeLayout;
