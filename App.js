import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Fetch from "./components/fetch";
import Home from "./components/home";
import Login from "./components/login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./store";

// const initialState = {
//   book: "gen",
//   chapter: 1,
//   verse: 1,
// };

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate("ProfileScreen", { name: "Jane" })}
//     />
//   );
// };
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const Tab = createBottomTabNavigator();

export default function App() {
  //const [terms, setTerms] = useState(initialState);

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title: "Bible Search" }}
          />
          <Tab.Screen
            name="Fetch"
            component={Fetch}
            options={{ title: "Result" }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
            style={styles.title}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    justifyContent: "center",
    backgroundColor: "red",
  },
});
