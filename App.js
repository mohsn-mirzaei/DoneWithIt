import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import jwtDecode from "jwt-decode";

import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import AppNavigator from "./app/components/navigation/AppNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import { useState } from "react";
import authStorage from "./app/auth/storage";

export default App = () => {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
};
