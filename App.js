import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <Screen>
        <Icon name="email" />
      </Screen>
    </GestureHandlerRootView>
  );
};
