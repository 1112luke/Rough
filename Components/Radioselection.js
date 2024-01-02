import { StyleSheet, View, Text, Pressable } from "react-native";
import global from "../style";

export function Radioselection({ options, value, setvalue }) {
    return (
        <View style={[styles.container]}>
            {options.map((option, i) => {
                return (
                    <Pressable
                        key={i}
                        onPress={() => {
                            setvalue(option);
                        }}
                        style={[
                            global.bluefill,
                            global.blackshadow,
                            styles.button,
                            value == option && styles.selected,
                        ]}
                    >
                        <Text style={[global.font, { fontSize: 20 }]}>
                            {option}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        width: "100%",
        height: 80,
        borderBottomWidth: 2,
    },
    button: {
        marginVertical: 5,
        marginHorizontal: "6%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 0,
        borderRadius: 4,
    },
    selected: {
        shadowOffset: 0,
        transform: [{ translateX: -3 }, { translateY: 4 }],
    },
});
