import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default App = () => {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem title="Message" ImageComponent={<Icon name="email" />} />
      </Screen>
    </GestureHandlerRootView>
  );
};
