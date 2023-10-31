import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default App = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <GestureHandlerRootView>
      <AppPicker
        selectItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
    </GestureHandlerRootView>
  );
};
