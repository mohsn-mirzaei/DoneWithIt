import { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.fullname}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.fullname)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              fullname: "Saeid Tavazani",
              description: "My name is saeid, I'm Backend developer",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;