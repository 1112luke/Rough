import { Gem } from "./Gem";
import { Text, View, StyleSheet } from "react-native";
import global from "../style";

export function Roughlogo(props) {
    const size = Number(props.scale);
    console.log(size);

    return (
        <>
            <View
                style={[
                    styles.container,
                    { transform: [{ scale: size }, { scale: 0.45 }] },
                ]}
            >
                <Text
                    style={[
                        global.font,
                        global.bluefont,
                        { fontSize: 120, marginRight: 40 },
                    ]}
                >
                    R
                </Text>
                <View style={styles.gem}>
                    <Gem x="100" y="120"></Gem>
                </View>
                <Text style={[global.font, global.bluefont, { fontSize: 120 }]}>
                    ugh
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 0,
    },
    gem: {
        position: "absolute",
        left: 26,
        transform: [
            { rotateZ: "17deg" },
            { translateX: -6 },
            { translateY: -5 },
            { scale: 0.9 },
        ],
    },
});
