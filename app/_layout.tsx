import { useEffect } from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "../src/styles/themeProvider";
import handleLoadDefaultConfig from "../src/utils/handleLoadDefaultConfig";
import { Stack } from "expo-router";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    FlameSans: require("../assets/fonts/FlameSans.otf"),
  });

  useEffect(() => {
    handleLoadDefaultConfig();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
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
