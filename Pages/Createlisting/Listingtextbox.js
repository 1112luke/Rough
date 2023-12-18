import { View, Text, StyleSheet, TextInput } from "react-native";

export function Listingtextbox({ name, description, value, onChange }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.text}>{name.toUpperCase()}</Text>
                </View>
                <View style={styles.right}>
                    <TextInput
                        placeholder={description}
                        value={value}
                        onChangeText={(newtext) => onChange(newtext)}
                    ></TextInput>
                </View>
            </View>
        </>
    );
}

styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#34c0eb",
        borderRadius: 7,
        margin: 20,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    text: {
        textAlign: "center",
        color: "#ffffff",
    },
});
