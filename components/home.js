import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  newSearchBook,
  // newSearchChapter,
  // newSearchVerse,
} from "../store/action";
// import { bindActionCreators } from "redux";
// import { newSearch } from "../store/action";

// const searchItem = {
//   book: book,
//   chapter: chapter,
//   verse: verse,
// };

function Home({ navigation }) {
  // console.log(props.searchItem);
  // const book = useSelector((state) => state.book);
  // const chapter = useSelector((state) => state.chapter);
  // const verse = useSelector((state) => state.book);

  const dispatch = useDispatch();

  // function changeBook() {
  //   dispatch({
  //     type: SEARCH_BOOKS,
  //   });
  // }

  // function changeChapter() {
  //   dispatch({
  //     type: SEARCH_CHAPTER,
  //   });
  // }
  // function changeVerse() {
  //   dispatch({
  //     type: SEARCH_VERSE,
  //   });
  // }

  const [newBook, setBook] = useState("");
  const [newChapter, setChapter] = useState("");
  const [newVerse, setVerse] = useState("");

  //console.log(`${newBook}, ${newChapter}, ${newVerse}`);
  const newSearchItems = {
    book: newBook,
    chapter: newChapter,
    verse: newVerse,
  };
  //console.log(`here i print: ${newSearchItems}`);

  function onChange() {
    dispatch(newSearchBook(newSearchItems));
    // dispatch(newSearchChapter(newChapter));
    // dispatch(newSearchVerse(newVerse));
    console.log("dispatched");
  }

  return (
    <View style={styles.mainHome}>
      {/* <Text style={styles.homeTitle}>Daily Quote</Text> */}

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
      {/* <Button
        style={styles.button}
        onPressIn={onChange}
        //onPress={() => navigation.navigate("Fetch", { name: "fetch" })}
        //onPress={() => props.newSearch}
        // onPress={() => {
        //   onChange();
        //   //console.log("pressed to submit");
        //   //dispatch(newSearchBook, newSearchChapter, newSearchVerse);
        // }}
        // onPress={onChange}

        title="get verse"
      /> */}
      <TouchableWithoutFeedback
        onPressIn={onChange}
        onPress={() => navigation.navigate("Fetch", { name: "fetch" })}
      >
        <Text style={styles.button}>get Verse</Text>
      </TouchableWithoutFeedback>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Login", { name: "login" })}
        title="Log In"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainHome: {
    width: "100%",
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
  },
  textInputs: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    borderWidth: 1,
    marginTop: 10,
    width: "30",
  },
});

// const mapStateToProps = (state) => {
//   const { searchItem } = state;
//   return { searchItem };
// };

// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators(
//     {
//       newSearch,
//     },
//     dispatch
//   );
// };
export default Home;
