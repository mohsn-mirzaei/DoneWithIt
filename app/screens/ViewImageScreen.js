import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen() {
  const imageURL = require("../assets/chair.jpg");

  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}></View>
      <View style={[styles.icon, styles.deleteIcon]}></View>
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
    backgroundColor: colors.primary,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    right: 30,
  },
});

export default ViewImageScreen;
