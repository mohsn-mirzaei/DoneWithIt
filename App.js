import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthNavigator from "./app/components/navigation/AuthNavigator";
import AppNavigator from "./app/components/navigation/AppNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
