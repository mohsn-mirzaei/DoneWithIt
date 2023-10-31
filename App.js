import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <AppText>Hello World</AppText>
      <AppTextInput icon="email" placeholder="Username" />
      <AppButton />
    </GestureHandlerRootView>
  );
};
