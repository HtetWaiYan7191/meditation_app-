import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href={"./home/subhome"}>Go To Subhome</Link>
    </View>
  );
}
