import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Tradearrow } from "../../Components/Tradearrow";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Topbar } from "../../Components/Topbar";
import { auth } from "../../Components/config/firebase";
import global from "../../style";
import { Offerings } from "./Offerings";
import { Submitbutton } from "../../Components/Submitbutton";

export function Trade({ route, navigation }) {
    const tabBarHeight = useBottomTabBarHeight();
    const [senderitems, setsenderitems] = useState([]);
    const [recieveritems, setrecieveritems] = useState([]);
    const { person } = route.params;

    function handleTrade() {}

    return (
        <>
            <SafeAreaView style={[global.creme, { flex: 1 }]}>
                <Topbar></Topbar>
                <View style={[styles.header]}>
                    <Text
                        style={[
                            global.font,
                            global.blueshadow,
                            global.bluefont,
                            styles.text,
                        ]}
                    >
                        Trade
                    </Text>
                </View>
                <View style={[styles.tradebox, { marginBottom: tabBarHeight }]}>
                    <View style={{ flex: 0.1 }}></View>
                    <View style={styles.top}>
                        <Offerings
                            personid={person.uid}
                            items={recieveritems}
                            setitems={setrecieveritems}
                            navigation={navigation}
                        ></Offerings>
                    </View>
                    <View style={styles.middle}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Tradearrow
                                    size={100}
                                    flip={false}
                                ></Tradearrow>
                            </View>
                            <View
                                style={{
                                    flex: 2,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Submitbutton
                                    name="Propose Offer"
                                    onpress={() => {
                                        handleTrade;
                                    }}
                                ></Submitbutton>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Tradearrow size={100} flip={true}></Tradearrow>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Offerings
                            personid={auth.currentUser.uid}
                            items={senderitems}
                            setitems={setsenderitems}
                            navigation={navigation}
                        ></Offerings>
                    </View>
                    <View style={{ flex: 0.1 }}></View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "#56949F",
        borderBottomWidth: 2,
        marginHorizontal: 40,
        padding: 0,
    },
    tradebox: {
        flex: 1,
        backgroundColor: "#65afff",
        borderRadius: 10,
        margin: 5,
    },
    top: { flex: 2, justifyContent: "center", alignItems: "center" },
    middle: { flex: 1 },
    bottom: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 60,
        marginTop: 10,
    },
});
