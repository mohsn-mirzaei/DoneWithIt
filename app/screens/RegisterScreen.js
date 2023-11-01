import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormFiled, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const LoginSchema = Yup.object().shape({
  fullname: Yup.string().required().min(3),
  email: Yup.string().required().email("Invalid email"),
  password: Yup.string().required().min(4),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ fullname: "", email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={LoginSchema}
      >
        <AppFormFiled
          autoCorrect={false}
          icon="account"
          name="fullname"
          placeholder="Full Name"
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
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
