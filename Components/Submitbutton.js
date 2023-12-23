import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import global from "../style";

export function Submitbutton({
    name,
    onpress,
    margin,
    marginHorizontal,
    fontSize,
}) {
    const [pressed, setpressed] = useState(false);

    var m = 20;
    var mh = 60;
    var fs = 20;

    if (margin) {
        m = margin;
    }
    if (mh) {
        mh = marginHorizontal;
    }
    if (fontSize) {
        fs = fontSize;
    }

    return (
        <>
            <Pressable
                style={[
                    global.bluefill,
                    global.blackshadow,
                    styles.button,
                    pressed && styles.pressed,
                    { margin: m, marginHorizontal: mh },
                ]}
                onPressIn={() => {
                    setpressed(true);
                }}
                onPress={() => {
                    setpressed(false);
                    onpress();
                }}
            >
                <Text
                    style={[
                        global.font,
                        global.bluefont,
                        styles.text,
                        { fontSize: fs },
                    ]}
                >
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
        borderRadius: 5,
        shadowRadius: 0,
    },
    pressed: {
        shadowOffset: 0,
        transform: [{ translateX: -3 }, { translateY: 4 }],
    },
    text: {
        margin: 10,
        color: "black",
    },
});
