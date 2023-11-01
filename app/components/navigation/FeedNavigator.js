import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../../screens/ListingScreen";
import ListingDetailsScreen from "../../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listing"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
