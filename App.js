import { useEffect, useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import AppNavigator from "./app/components/navigation/AppNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";

SplashScreen.preventAutoHideAsync();

export default App = () => {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return setAppIsReady(true);
    setUser(user);
    setAppIsReady(true);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
};
