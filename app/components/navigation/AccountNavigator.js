import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../../screens/AccountScreen";
import MessagesScreen from "../../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messeges" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
