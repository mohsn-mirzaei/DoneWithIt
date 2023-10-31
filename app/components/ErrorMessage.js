import { StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default ErrorMessage;
