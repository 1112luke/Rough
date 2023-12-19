import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import global from "../style";

export function Submitbutton({ name, onpress }) {
    const [pressed, setpressed] = useState(false);

    return (
        <>
            <Pressable
                style={[
                    global.bluefill,
                    global.blackshadow,
                    styles.button,
                    pressed && styles.pressed,
                ]}
                onPressIn={() => {
                    setpressed(true);
                }}
                onPress={() => {
                    setpressed(false);
                    onpress();
                }}
            >
                <Text style={[global.font, global.bluefont, styles.text]}>
                    {name}
                </Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        marginHorizontal: 60,
        borderRadius: 5,
        shadowRadius: 0,
    },
    pressed: {
        shadowOffset: 0,
        transform: [{ translateX: -3 }, { translateY: 4 }],
    },
    text: {
        margin: 10,
        fontSize: 20,
        color: "black",
    },
});
