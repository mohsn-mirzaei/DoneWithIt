import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthNavigator from "./app/components/navigation/AuthNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";

export default App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
