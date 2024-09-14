import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: "red" }}>
      <Tabs.Screen name="home"  />
      <Tabs.Screen name="meditation"  />
    </Tabs>
  );
}
