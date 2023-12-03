import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/Button";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  const backgroundURL = require("../assets/background.jpg");

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={backgroundURL}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
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
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
