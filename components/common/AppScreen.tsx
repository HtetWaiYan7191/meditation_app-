import useThemeColor from "@/hooks/useThemeColor";
import { Box } from "native-base";
import React from "react";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";

interface Props {
  children: React.ReactNode;
}
function AppScreen({ children }: Props) {
  const currentTheme = useThemeColor();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box p={4} flex={1} bg={currentTheme.tint}>
        {children}
      </Box>
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
