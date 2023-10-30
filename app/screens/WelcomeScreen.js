import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  const backgroundURL = "../assets/background.jpg";

  return (
    <ImageBackground style={styles.background} source={require(backgroundURL)}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, styles.loginButton]}></View>
      <View style={[styles.button, styles.registerButton]}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  button: { width: "100%", height: 70 },
  loginButton: {
    backgroundColor: colors.primary,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
