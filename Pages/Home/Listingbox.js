import { View, Text, StyleSheet } from "react-native";
import global from "../../style.js";

export function Listingbox({ image, listing }) {
    return (
        <>
            {/*use outer view to allow flex display to function properly with the margin*/}
            <View style={styles.outer}>
                <View style={[global.borders, styles.container]}>
                    <View style={[styles.top]}>
                        <Text style={{ margin: 40 }}>{image}</Text>
                    </View>
                    <View style={[styles.bottom, global.bluefill]}>
                        <Text
                            style={[
                                global.font,
                                ,
                                { fontSize: 20, textAlign: "center" },
                            ]}
                        >
                            {`${listing.description.toUpperCase()} - ${
                                listing.size
                            }`}
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
        height: 200,
        shadowColor: "black",
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    top: {
        justifyContent: "center",
        alignItems: "center",
        flex: 3,
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});
