import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image style={styles.image} source={{ uri: imageUri }} />
      ) : (
        <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
