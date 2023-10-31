import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormFiled,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const ListingEditSchema = Yup.object().shape({
  title: Yup.string().required().min(1),
  price: Yup.string().required().min(1).max(10000),
  description: Yup.string(),
  category: Yup.object().required().nullable(),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={ListingEditSchema}
      >
        <AppFormFiled maxLength={255} name="title" placeholder="Title" />
        <AppFormFiled
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
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
