import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Topbar } from "../../Components/Topbar";
import { Listingbox } from "./Listingbox";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db, auth } from "../../Components/config/firebase";
import global from "../../style";

export function Home({ navigation }) {
    const [listings, setlistings] = useState([]);

    //get listings -- eventually this will be a more advanced query
    useEffect(() => {
        const listingref = collection(db, "listings");
        const listingquery = query(
            listingref,
            where("owner", "==", auth.currentUser.uid)
        );
        onSnapshot(listingquery, (snapshot) => {
            const newlistings = [];
            snapshot.docs.forEach((listingdoc) => {
                var listing = listingdoc.data();
                newlistings.push(listing);
            });
            setlistings(newlistings);
        });
    }, []);

    return (
        <>
            <SafeAreaView style={[global.creme, { flex: 1 }]}>
                <Topbar navigation={navigation}></Topbar>
                <ScrollView>
                    <View style={styles.container}>
                        {listings.map((listing, i) => {
                            return (
                                /*wrap in a pressable that links to an "item page" component that takes the item as props*/
                                <Listingbox
                                    listing={listing}
                                    style={styles.listing}
                                    key={i}
                                ></Listingbox>
                            );
                        })}
                        <View style={{ height: 300 }}>
                            <Text style={{ color: "white" }}>.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
