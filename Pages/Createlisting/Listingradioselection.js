import { View, StyleSheet, Text, Pressable } from "react-native";
import global from "../../style";

export function Listingradioselection({ name, options, value, setvalue }) {
    return (
        <View style={[styles.container, global.blueshadow]}>
            <View style={styles.left}>
                <Text
                    style={[
                        styles.text,
                        global.font,
                        {
                            fontSize: 20,
                            padding: 0,
                            margin: 0,
                        },
                    ]}
                >
                    {name}
                </Text>
            </View>
            <View style={styles.right}>
                {options.map((option, i) => {
                    return (
                        <Pressable
                            onPress={() => {
                                setvalue(option);
                            }}
                            key={i}
                            style={[
                                global.borders,
                                global.blackshadow,
                                global.bluefill,
                                styles.button,
                                value == option && styles.selected,
                            ]}
                        >
                            <Text style={[styles.text, global.font]}>
                                {option}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#34c0eb",
        borderRadius: 7,
        margin: 20,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 2,
        flexDirection: "row",
    },
    button: {
        flex: 1,
        borderWidth: 2,
        marginRight: 5,
        borderRadius: 5,
        shadowRadius: 0,
    },
    text: {
        textAlign: "center",
        paddingTop: 7,
        paddingBottom: 7,
        fontSize: 17,
    },
    selected: {
        backgroundColor: "#F7EDD8",
        shadowOffset: { width: 0, height: 0 },
        transform: [{ translateX: -2 }, { translateY: 3 }],
    },
});
