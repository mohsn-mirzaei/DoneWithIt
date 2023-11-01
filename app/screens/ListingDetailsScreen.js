import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components//list/ListItem";

const ListingDetailsScreen = () => {
  const imageURL = require("../assets/jacket.jpg");

  return (
    <View>
      <Image style={styles.image} source={imageURL} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            fullname="Mosh Hamedani"
            description="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
