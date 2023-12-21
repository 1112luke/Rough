import { View, Text, StyleSheet } from "react-native";
import global from "../../style";

export function Styledtext({ pretext, text, size, margin }) {
    var former = "";
    if (pretext != undefined) {
        former = pretext;
    }

    return (
        <View
            style={[
                styles.container,
                global.blue,
                global.blueshadow,
                { marginHorizontal: margin },
            ]}
        >
            <Text style={[styles.text, global.font, { fontSize: size }]}>
                {`${former}${text}`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
    },
});
