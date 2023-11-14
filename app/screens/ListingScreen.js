import { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Button from "../components/Button";
import AppText from "../components/Text";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listing";
import routes from "../components/navigation/routes";
import Screen from "../components/Screen";

const ListingScreen = ({ navigation }) => {
  const [listing, setListing] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListing();
  }, []);

  const loadListing = async () => {
    const response = await listingApi.getListing();
    if (!response.ok) return setError(true);

    setError(false);
    setListing(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listing!</AppText>
          <Button title="retry" onPress={loadListing} />
        </>
      )}
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
