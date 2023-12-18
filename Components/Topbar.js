import { View, Text, StyleSheet } from "react-native";
import global from "../style.js"

export function Topbar() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style = {[global.text, {fontSize: 30}]}>Learn</Text>
                </View>
                <View style={styles.middle}>
                    <Text style = {[global.text, {fontSize: 40, textAlign: "center"}]}>Rough</Text>
                </View>
                <View style={[styles.right]}>
                    <Text style = {{fontSize: 30}}>40💎</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: "#a9b0ab",
        flexDirection: "row",
        paddingBottom: 10,
    },
    left: {
        padding:5,
        paddingLeft: 10,
        flex:1,
    },
    middle: {
        float: "left",
        flex: 2.5, 
    },
    right: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 4,
        paddingLeft: 10,
    },
});
