import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
};
