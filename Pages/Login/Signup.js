import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { Signupform } from "./Signupform.js";
import { Error } from "./Error.js";
import global from "../../style.js";
import { Roughlogo } from "../../Components/Roughlogo.js";

export function Signup({ navigation }) {
    const [errorid, seterror] = useState("");

    return (
        <SafeAreaView style={[styles.container, global.creme]}>
            <Error errorid={errorid}></Error>
            <View style={styles.header}>
                <Roughlogo scale="3"></Roughlogo>
            </View>
            <Text
                style={[
                    {
                        color: "black",
                        fontSize: 40,
                        marginBottom: 0,
                        marginTop: 0,
                    },
                    global.font,
                ]}
            >
                SIGN UP
            </Text>
            <View style={styles.middle}>
                <Signupform
                    seterror={seterror}
                    errorid={errorid}
                    navigation={navigation}
                ></Signupform>
            </View>
            <View style={styles.bottom}>
                <Text></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 3,
        marginTop: 30,
        fontWeight: "bold",
        shadowColor: "#65afff",
        shadowOffset: { width: -6, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
    },
    middle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 5,
        width: 400,
    },
    bottom: {
        flex: 5,
    },
    text: {
        color: "#34c0eb",
        fontSize: 120,
        textAlign: "center",
    },
});
