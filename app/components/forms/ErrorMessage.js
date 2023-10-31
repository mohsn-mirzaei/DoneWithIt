import { StyleSheet } from "react-native";
import AppText from "../Text";
import colors from "../../config/colors";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
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
