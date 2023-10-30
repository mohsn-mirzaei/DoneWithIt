import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, fullname, description }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.fullname}>{fullname}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  fullname: {
    fontWeight: "500",
  },
  description: {
    color: colors.medium,
  },
});

export default ListItem;
