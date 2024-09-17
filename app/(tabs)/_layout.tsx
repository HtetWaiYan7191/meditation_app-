import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{ title: "Home ", headerShown: false }}
      />
      <Tabs.Screen
        name="meditation/index"
        options={{ title: "Meditation", headerShown: true }}
      />
    </Tabs>
  );
}
