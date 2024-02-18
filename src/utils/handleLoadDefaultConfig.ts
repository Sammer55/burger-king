import { LogBox, TouchableOpacity } from "react-native";
import { loadAsync } from "expo-font";

LogBox.ignoreAllLogs();

TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.5;

const handleLoadDefaultConfig = () => {
  loadAsync({
    FlameSans: require("../../assets/fonts/FlameSans.otf"),
  });
  loadAsync({
    FlameBold: require("../../assets/fonts/FlameBold.otf"),
  });
};

export default handleLoadDefaultConfig;
