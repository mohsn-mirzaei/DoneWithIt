import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import {
  AppForm,
  AppFormFiled,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";

const logoURL = require("../assets/logo-red.png");

const LoginSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid email"),
  password: Yup.string().required().min(4),
});

const LoginScreen = () => {
  const [loginFaild, setLoginFaild] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFaild(true);
    setLoginFaild(false);
    const user = jwtDecode(result.data);
    console.log(user);
  };

  return (
    <Screen style={styles.container}>
      <Image source={logoURL} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFaild}
        />
        <AppFormFiled
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormFiled
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
