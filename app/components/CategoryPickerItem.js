import { StyleSheet, TouchableOpacity } from "react-native";

import Icon from "../components/Icon";
import AppText from "./Text";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
