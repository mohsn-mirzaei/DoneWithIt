import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <ListingScreen />
    </GestureHandlerRootView>
  );
};
