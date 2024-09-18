import useThemeColor from "@/hooks/useThemeColor";
import { Box, ScrollView } from "native-base";
import React from "react";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";

interface Props {
  children: React.ReactNode;
}
function AppScreen({ children }: Props) {
  const currentTheme = useThemeColor();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView flex={1} showsVerticalScrollIndicator>
        <Box flex={1} p={4}>
          {children}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20, // Adjust as needed
  },
});
export default AppScreen;
