import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.constainer}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={defaultStyles.colors.medium}
          size={20}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
