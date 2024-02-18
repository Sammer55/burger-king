import { useEffect } from "react";
import { useFonts } from "expo-font";
import CouponsScreen from "./src/screens/coupons";
import { ThemeProvider } from "./src/styles/themeProvider";
import handleLoadDefaultConfig from "./src/utils/handleLoadDefaultConfig";

export default function App() {
  const [fontsLoaded] = useFonts({
    FlameSans: require("./assets/fonts/FlameSans.otf"),
  });

  useEffect(() => {
    handleLoadDefaultConfig();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <CouponsScreen />
    </ThemeProvider>
  );
}
