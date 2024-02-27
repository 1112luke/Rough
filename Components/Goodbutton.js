import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export function Goodbutton(props) {
  return (
    <>
      <Pressable onPress={props.onpress} style={styles.button}>
        <Text style={{ padding: 10, textAlign: "center", color: "lightgray" }}>
          {props.text == null ? "Sign In" : props.text}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "grey",
    width: 300,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 15,
  },
});
