import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Tradearrow } from "../../Components/Tradearrow";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Topbar } from "../../Components/Topbar";
import { auth } from "../../Components/config/firebase";
import global from "../../style";
import { Offerings } from "./Offerings";
import { Submitbutton } from "../../Components/Submitbutton";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Components/config/firebase";

export function Trade({ route, navigation }) {
    const tabBarHeight = useBottomTabBarHeight();
    const [senderitems, setsenderitems] = useState([]);
    const [recieveritems, setrecieveritems] = useState([]);
    const [tradeLoading, setTradeLoading] = useState([false]);
    const { person, mode, trade } = route.params;
    //mode is propose or view

    async function handleTrade() {
        setTradeLoading(true);

        const traderef = collection(db, "trades");
        const data = {
            sender: auth.currentUser.uid,
            reciever: person.uid,
            senderitems: senderitems,
            recieveritems: recieveritems,
            status: "pending",
            created: serverTimestamp(),
        };
        await addDoc(traderef, data);
        setsenderitems([]);
        setrecieveritems([]);

        setTradeLoading(false);
    }

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
                            mode = "propose"
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
                                {senderitems.length > 0 &&
                                    recieveritems.length > 0 && (
                                        <Submitbutton
                                            name="Propose Offer"
                                            onpress={handleTrade}
                                        ></Submitbutton>
                                    )}
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
                         mode = "propose"
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
