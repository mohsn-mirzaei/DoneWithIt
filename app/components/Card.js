import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./Text";

const Card = ({ imageUrl, title, subTitle, onPress, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    marginBottom: 7,
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
