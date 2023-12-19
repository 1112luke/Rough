import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Createlistingform } from "./Createlistingform";

export function Createlisting() {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.imagebox}>
                    <Text>Image</Text>
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
        borderWidth: 5,
        borderColor: "#34c0eb",
        borderRadius: 4,
    },
    formwrapper: {
        flex: 2,
    },
});
