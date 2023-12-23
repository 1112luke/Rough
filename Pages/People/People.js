import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Topbar } from "../../Components/Topbar";
import { Peoplebox } from "./Peoplebox";
import global from "../../style";

export function People({ navigation }) {
    return (
        <>
            <SafeAreaView style={[global.creme, { flex: 1 }]}>
                <Topbar></Topbar>
                <View style={[styles.top]}>
                    <Text
                        style={[
                            global.font,
                            global.blueshadow,
                            global.bluefont,
                            styles.text,
                        ]}
                    >
                        People
                    </Text>
                </View>
                <View style={styles.bottom}></View>
                <Peoplebox navigation={navigation}></Peoplebox>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    top: {
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "#56949F",
        borderBottomWidth: 2,
        marginHorizontal: 40,
        padding: 0,
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 60,
        marginTop: 10,
    },
});
