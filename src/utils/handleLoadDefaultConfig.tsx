import { LogBox, TouchableOpacity } from "react-native";
import setGlobalFontFamily from "./setGlobalFontFamily";

LogBox.ignoreAllLogs();

TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.5;

const handleLoadDefaultConfig = () => {
  setGlobalFontFamily();
};

export default handleLoadDefaultConfig;
