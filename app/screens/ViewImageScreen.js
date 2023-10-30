import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  const imageURL = require("../assets/chair.jpg");

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={[styles.icon, styles.closeIcon]}
        name="close"
        color={colors.white}
        size={35}
      />
      <MaterialCommunityIcons
        style={[styles.icon, styles.deleteIcon]}
        name="trash-can-outline"
        color={colors.white}
        size={35}
      />
      <Image resizeMode="contain" style={styles.image} source={imageURL} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: { width: 50, height: 50, position: "absolute", top: 40 },
  closeIcon: {
    left: 30,
  },
  deleteIcon: {
    right: 30,
  },
});

export default ViewImageScreen;
