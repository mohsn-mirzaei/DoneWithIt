import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import AppText from "../components/Text";
import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";
import routes from "../navigation/routes";

import listingApi from "../api/listings";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listing!</AppText>
            <Button title="retry" onPress={getListingsApi.request} />
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.images[0].url}
              title={item.title}
              subTitle={`$${item.price}`}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
