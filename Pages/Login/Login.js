import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { Loginform } from "./Loginform.js";
import { Error } from "./Error.js";
import global from "../../style.js";
import { Roughlogo } from "../../Components/Roughlogo.js";

export function Login({ navigation }) {
    const [errorid, seterror] = useState("");

    return (
        <SafeAreaView style={[styles.container, global.creme]}>
            <Error errorid={errorid}></Error>
            <View style={styles.header}>
                <Roughlogo scale="3"></Roughlogo>
            </View>
            <View style={styles.middle}>
                <Loginform
                    seterror={seterror}
                    errorid={errorid}
                    navigation={navigation}
                ></Loginform>
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
        flex: 2,
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
        justifyContent: "center",
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
