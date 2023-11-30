import AppTextInput from "../TextInput";
import { ErrorMessage } from ".";
import { useFormikContext } from "formik";

const AppFormFiled = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        values={values[name]}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFiled;
