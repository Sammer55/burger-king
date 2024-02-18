import { useEffect } from "react";
import { ThemeProvider } from "../src/styles/themeProvider";
import handleLoadDefaultConfig from "../src/utils/handleLoadDefaultConfig";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

export default function Layout() {
  let [fontsLoaded] = useFonts({
    FlameSans: require("../assets/fonts/FlameSans.otf"),
    FlameBold: require("../assets/fonts/FlameBold.otf"),
  });

  useEffect(() => {
    handleLoadDefaultConfig();
  }, []);

  if (!fontsLoaded) return;

  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" />
      <Stack
        initialRouteName="coupons"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
