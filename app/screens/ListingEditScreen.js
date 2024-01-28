import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormFiled,
  AppFormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import listingApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import { useState } from "react";
import UploadScreen from "./UploadScreen";

const ListingEditSchema = Yup.object().shape({
  title: Yup.string().required().min(1),
  price: Yup.string().required().min(1).max(10000),
  description: Yup.string(),
  category: Yup.object().nullable().required(),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);

    listing.images.forEach((image, index) =>
      data.append("images", {
        name: "image" + index,
        type: "image/jpeg",
        uri: image,
      })
    );

    if (location) data.append("location", JSON.stringify(location));

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentage = event.loaded / event.total;
        setUploadVisible(true);
        setProgress(percentage);
      }
    });
    xhr.open("POST", "https://donewithit.mohsenmirzaei.dev/api/listings");
    xhr.onload = async () => {
      if (xhr.status === 201) {
        resetForm();
      } else {
        return alert("Couldn't save the listing");
      }
      setUploadVisible(false);
    };

    xhr.onerror = () => {
      console.error("Error during the listing upload:", error);
      alert("An error occurred during the listing upload");
    };

    xhr.send(data);
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={ListingEditSchema}
      >
        <FormImagePicker name="images" />
        <AppFormFiled maxLength={255} name="title" placeholder="Title" />
        <AppFormFiled
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormFiled
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
