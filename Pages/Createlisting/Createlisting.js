import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Createlistingform } from "./Createlistingform";
import global from "../../style";

export function Createlisting() {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <>
            <SafeAreaView style={[styles.container, global.creme]}>
                <View style={styles.imagebox}>
                    <Image
                        style={styles.image}
                        source={{ uri: "https://picsum.photos/200/300" }}
                    ></Image>
                </View>
                <View
                    style={[styles.formwrapper, { marginBottom: tabBarHeight }]}
                >
                    <Createlistingform></Createlistingform>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 0,
        margin: 0,
    },
    imagebox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formwrapper: {
        flex: 2,
    },
    image: {
        width: 200,
        height: "100%",
        borderWidth: 5,
        borderColor: "#65AFFF",
        borderRadius: 5,
    },
});
