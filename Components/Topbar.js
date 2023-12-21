import { View, Text, StyleSheet, Pressable } from "react-native";
import { Roughlogo } from "./Roughlogo.js";
import { Gem } from "./Gem.js";
import global from "../style.js";

export function Topbar({ navigation }) {
    function handleBack() {
        navigation.navigate("Signup");
    }

    return (
        <>
            <View style={[styles.container, global.borders]}>
                <View style={styles.left}>
                    <Pressable onPress={handleBack}>
                        <Text
                            style={[
                                global.font,
                                global.bluefont,
                                { fontSize: 30, textAlign: "center" },
                            ]}
                        >
                            Learn
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.middle}>
                    <Text
                        style={[
                            global.font,
                            global.bluefont,
                            {
                                fontSize: 45,
                            },
                        ]}
                    >
                        Rough
                    </Text>

                    {/* <View style={styles.logowrapper}>
                        <Roughlogo scale="1"></Roughlogo>
                    </View>*/}
                </View>

                <View style={[styles.right]}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View
                            style={{
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            <Text style={[{ fontSize: 30 }, global.font]}>
                                40
                            </Text>
                        </View>

                        <View
                            style={{
                                justifyContent: "flex-end",
                                alignItems: "center",
                                paddingBottom: 4,
                            }}
                        >
                            <Gem x="30" y="30"></Gem>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        flexDirection: "row",
        paddingBottom: 0,
    },
    left: {
        flex: 1.3,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    middle: {
        float: "left",
        flex: 2.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#65afff",
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        /*
        height: 110,
        backgroundColor: "red",
        overflow: "hidden",
    */
    },
    logowrapper: {
        position: "relative",
        top: -15,
        left: -10,
    },
    right: {
        flex: 1.3,
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
