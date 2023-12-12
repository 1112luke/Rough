import { Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { Pressable } from "react-native";

export function Form({ settext }) {
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");

  function handleSignIn() {
    console.log(id, pass);
    setid("");
    setpass("");
  }

  return (
    <>
      <Text style={{ color: "black", fontSize: 40, marginBottom: 40 }}>
        SIGN IN
      </Text>
      <TextInput
        style={styles.input}
        value={id}
        placeholder="Notre Dame NetID"
        onChangeText={(newText) => {
          setid(newText);
        }}
      />
      <TextInput />
      <TextInput
        style={styles.input}
        value={pass}
        placeholder="Password"
        onChangeText={(newText) => {
          setpass(newText);
        }}
      />
      <TextInput />
      <Pressable onPress={handleSignIn} style={styles.button}>
        <Text style={{ padding: 10, textAlign: "center", color: "lightgray" }}>
          Sign In
        </Text>
      </Pressable>
      <Text style={{ fontSize: 10, color: "grey", marginTop: 5 }}>
        Forgot Password?
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "left",
    color: "grey",
    borderWidth: 1,
    height: 40,
    borderColor: "grey",
    textAlign: "center",
    borderRadius: 4,
    width: 300,
  },
  button: {
    height: 40,
    backgroundColor: "grey",
    width: 300,
    borderRadius: 5,
    textAlign: "center",
  },
});
