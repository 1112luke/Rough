import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { Form } from "./Form.js";
import { Error } from "./Error.js";

export default function App() {
  const [errorid, seterror] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Error errorid={errorid}></Error>
      <View style={styles.header}>
        <Text style={styles.text}>ROUGH</Text>
      </View>
      <View style={styles.middle}>
        <Form seterror={seterror}></Form>
      </View>
      <View style={styles.bottom}>
        <Text></Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    marginTop: 30,
    fontWeight: "bold",
  },
  middle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
    width: 400,
  },
  bottom: {
    flex: 3.8,
  },
  text: {
    color: "#34c0eb",
    fontSize: 60,
    textAlign: "center",
  },
});
