import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageInput from "./app/components/ImageInput";
import { Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export default App = () => {
  const [imageUri, setImageUri] = useState();
  const requestPermision = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permision to access the library");
  };

  useEffect(() => {
    requestPermision();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) setImageUri(result.uri);
  };

  return (
    <GestureHandlerRootView>
      <Button title="select image" onPress={selectImage} />
      <ImageInput imageUri={imageUri} />
    </GestureHandlerRootView>
  );
};
