import { Text } from "react-native";

import defaultStyles from "../config/defaultStyles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
