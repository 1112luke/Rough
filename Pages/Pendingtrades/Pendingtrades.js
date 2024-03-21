import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { Topbar } from "../../Components/Topbar";
import global from "../../style";
import { Radioselection } from "../../Components/Radioselection";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../Components/config/firebase";
import { Tradebox } from "./Tradebox";
import { auth } from "../../Components/config/firebase";

export function Pendingtrades({navigation}) {
    const [page, setpage] = useState("sent");
    const [senttrades, setsenttrades] = useState([]);
    const [recievedtrades, setrecievedtrades] = useState([]);
    //^^either sent or recieved

    useEffect(() => {
        const tradesref = collection(db, "trades");

        //get sent trades

        const sentquery = query(
            tradesref,
            where("sender", "==", auth.currentUser.uid)
        );

        onSnapshot(sentquery, (snapshot) => {
            const newtrades = [];
            snapshot.docs.forEach((tradedoc) => {
                var trade = tradedoc.data();
                newtrades.push(trade);
            });
            setsenttrades(newtrades);
        });

        //get recieved trades
        const recievedquery = query(
            tradesref,
            where("reciever", "==", auth.currentUser.uid)
        );

        onSnapshot(recievedquery, (snapshot) => {
            const newtrades = [];
            snapshot.docs.forEach((tradedoc) => {
                var trade = tradedoc.data();
                newtrades.push(trade);
            });
            setrecievedtrades(newtrades);
        });
    }, []);

    return (
        <SafeAreaView style={[global.creme, { flex: 1 }]}>
            <Topbar></Topbar>
            <View style={[styles.container]}>
                <Radioselection
                    options={["sent", "recieved"]}
                    value={page}
                    setvalue={setpage}
                ></Radioselection>
                <ScrollView>
                    {page == "sent" &&
                        senttrades.map((trade, i) => {
                            return (
                                <Tradebox
                                    key={i}
                                    trade={trade}
                                    status="sent"
                                    navigation = {navigation}
                                ></Tradebox>
                            );
                        })}
                    {page == "recieved" &&
                        recievedtrades.map((trade, i) => {
                            return (
                                <Tradebox
                                    key={i}
                                    trade={trade}
                                    status="recieved"
                                    navigation={navigation}
                                ></Tradebox>
                            );
                        })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
