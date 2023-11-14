import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listing";
import routes from "../components/navigation/routes";
import Screen from "../components/Screen";
import { useEffect } from "react";

const ListingScreen = ({ navigation }) => {
  const [listing, setListing] = useState();

  useEffect(() => {
    loadListing();
  }, []);

  const loadListing = async () => {
    const response = await listingApi.getListing();
    setListing(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subTitle={`$${item.price}`}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
