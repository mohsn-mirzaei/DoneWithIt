import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";

export default App = () => {
  const [imageUris, setImageUris] = useState([]);

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  return (
    <GestureHandlerRootView>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
    </GestureHandlerRootView>
  );
};
