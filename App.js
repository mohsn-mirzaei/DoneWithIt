import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageInput from "./app/components/ImageInput";
import { useState } from "react";

export default App = () => {
  const [imageUri, setImageUri] = useState();

  return (
    <GestureHandlerRootView>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </GestureHandlerRootView>
  );
};
