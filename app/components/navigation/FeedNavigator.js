import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../../screens/ListingScreen";
import ListingDetailsScreen from "../../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.LISTING}
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
