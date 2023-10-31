import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.constainer}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={colors.medium}
          size={20}
        />
      )}
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};

export default AppTextInput;
