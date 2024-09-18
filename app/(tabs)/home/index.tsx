import { AppScreen } from "@/components/common";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return (
    <AppScreen>
      <Text>Home Page hello mom! </Text>
      <Link href={"./home/subhome"}>Go To Subhome</Link>
    </AppScreen>
  );
}
