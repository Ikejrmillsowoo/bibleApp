import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { newSearchBook } from "../store/action";

function Home({ navigation }) {
  const book = useSelector((state) => state.book);
  const chapter = useSelector((state) => state.chapter);
  const verse = useSelector((state) => state.book);

  const dispatch = useDispatch();

  const [newBook, setBook] = useState(book);
  const [newChapter, setChapter] = useState(chapter);
  const [newVerse, setVerse] = useState(verse);

  const newSearchItems = {
    book: newBook,
    chapter: newChapter,
    verse: newVerse,
  };

  function onChange() {
    console.log(newSearchItems);
    dispatch(newSearchBook(newSearchItems));
  }

  return (
    <View style={styles.mainHome}>
      <View style={styles.mainHome}>
        <TextInput
          style={styles.textInputs}
          placeholder="book"
          onChangeText={(text) => setBook(text)}
        ></TextInput>

        <TextInput
          style={styles.textInputs}
          placeholder="chapter"
          keyboardType="numeric"
          onChangeText={(text) => setChapter(text)}
        ></TextInput>

        <TextInput
          style={styles.textInputs}
          placeholder="verse"
          keyboardType="numeric"
          onChangeText={(text) => setVerse(text)}
        ></TextInput>
        <View style={styles.touchFlex}>
          <TouchableWithoutFeedback
            onPressIn={onChange}
            onPress={() => navigation.navigate("Fetch", { name: "fetch" })}
          >
            <Text style={styles.button}>Get Verse</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login", { name: "login" })}
            title="Log In"
          >
            <Text style={styles.button}>Log In</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHome: {
    width: "100%",
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  textInputs: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
  },
  touchFlex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    borderWidth: 1,
    margin: 10,
    width: 100,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    backgroundColor: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
