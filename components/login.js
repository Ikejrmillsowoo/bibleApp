import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Login() {
  return (
    <View style={styles.title}>
      {/* <Text> Log In</Text> */}

      <TextInput style={styles.textInputs} placeholder="Enter Name" />
      <TextInput style={styles.textInputs} placeholder="Enter Email" />
      <Button title="Log In" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputs: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#eaeaea",
  },
  button: {
    flex: 1,
  },
  title: {
    justifyContent: "flex-start",
  },
});

export default Login;
