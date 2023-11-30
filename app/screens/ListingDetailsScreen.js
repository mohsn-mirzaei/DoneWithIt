import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components//list/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listing"
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
