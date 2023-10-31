import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import { useState } from "react";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({ items, onSelectItem, icon, placeholder, selectItem }) => {
  const [modalVisible, setMobdalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setMobdalVisible(true)}>
        <View style={styles.constainer}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
            />
          )}
          {selectItem ? (
            <AppText style={styles.text}>{selectItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            color={defaultStyles.colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setMobdalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setMobdalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
