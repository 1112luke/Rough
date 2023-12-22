import { StyleSheet, TextInput, Text } from "react-native";
import global from "../style";

export function Searchbar({ value, setvalue, filler }) {
    return (
        <TextInput
            style={[
                global.creme,
                global.borders,
                global.blackshadow,
                styles.input,
            ]}
            onChangeText={(newtext) => {
                setvalue(newtext);
            }}
            value={value}
            placeholder={filler}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 30,
        borderWidth: 2,
        borderRadius: 8,
        shadowRadius: 0,
        padding: 10,
        paddingLeft: 20,
    },
});
