import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const url = "https://bible-api.com/";

function Fetch({ navigation }) {
  const book = useSelector((state) => state.book);
  const chapter = useSelector((state) => state.chapter);
  const verse = useSelector((state) => state.verse);
  console.log(`here: ${book}, ${chapter}, ${verse}`);
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const item = await fetch(
        `${verse}`
          ? `${url}${book}+${chapter}:${verse}`
          : `${url}${book}+${chapter}`
      );
      const itemJSON = await item.json();

      setData(itemJSON);
    }

    fetchData();
  }, [book, chapter, verse]);

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>{data.reference}</Text>
      <ScrollView>
        <View>
          <Text style={styles.textItem}>{data.text}</Text>
        </View>
      </ScrollView>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Home", { name: "home" })}
        title="New Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  textItem: {
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
    margin: 10,
  },
});

export default Fetch;
