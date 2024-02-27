import { View, Text, StyleSheet, TextInput } from "react-native";
import global from "../../style";

export function Listingtextbox({ name, description, value, setvalue }) {
    return (
        <>
            <View style={[styles.container, global.blueshadow]}>
                <View style={styles.left}>
                    <Text style={[styles.text, global.font]}>
                        {name.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.right}>
                    <TextInput
                        placeholder={description}
                        value={value}
                        onChangeText={(newtext) => setvalue(newtext)}
                    ></TextInput>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 17,
        backgroundColor: "#34c0eb",
        borderRadius: 7,
        margin: 15,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    text: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
    },
});
