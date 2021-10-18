import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const Login = ({ navigation }, props) => (
  <Formik
    validationSchema={loginValidationSchema}
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    }}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched,
      isValid,
    }) => (
      <View style={styles.title}>
        <TextInput
          name="email"
          style={styles.textInputs}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          placeholder="email"
        />
        {errors.email && touched.email && (
          <Text style={{ fontSize: 15, color: "red" }}>{errors.email}</Text>
        )}
        <TextInput
          name="password"
          style={styles.textInputs}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          placeholder="password"
        />
        {errors.password && touched.password && (
          <Text style={{ fontSize: 15, color: "red" }}>{errors.password}</Text>
        )}
        {/* <Button
          onPress={handleSubmit}
          title="Log In"
          disabled={!isValid}
          style={styles.button}
        />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Signup", { name: "Sign Up" })}
          title="Sign Up"
        /> */}
        <View style={styles.buttonGroup}>
          <Button
            color="green"
            onPress={handleSubmit}
            title="Log In"
            disabled={!isValid}
            style={styles.button}
          />
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Signup", { name: "Sign Up" })}
            title="Sign Up"
          />
        </View>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000000",
  },
  textInputs: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
  button: {
    textAlign: "center",
    padding: 10,
    paddingBottom: 10,
    color: "white",
  },
  title: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000",
    paddingTop: 15,
  },
});

export default Login;
