import { View, Text, StyleSheet } from "react-native";
import global from "../../style.js";

export function Listingbox(props) {
    return (
        <>
            {/*use outer view to allow flex display to function properly with the margin*/}
            <View style={styles.outer}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={{ margin: 40 }}>{props.image}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text
                            style={[
                                global.text,
                                { fontSize: 20, textAlign: "center" },
                            ]}
                        >
                            {props.text}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    outer: {
        flexBasis: "50%",
    },
    container: {
        flexDirection: "column",
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#a9b0ab",
        height: 200,
    },
    top: {
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        flex: 3,
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "lightgray",
    },
});
