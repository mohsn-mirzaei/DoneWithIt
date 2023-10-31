import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <AppTextInput icon="email" placeholder="Username" />
    </GestureHandlerRootView>
  );
};
