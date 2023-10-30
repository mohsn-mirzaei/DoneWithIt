import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    fullname: "Mohsen Mirzaei",
    description: "My name is mohsen, I'm Frontend developer",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    fullname: "Saeid Tavazani",
    description: "My name is saeid, I'm Backend developer",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            fullname={item.fullname}
            description={item.description}
            image={item.image}
            onPress={() => console.log(item.fullname)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

export default MessagesScreen;
