import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Topbar } from "../../Components/Topbar";
import { Listingbox } from "./Listingbox";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Components/config/firebase";

export function Home({ navigation }) {
    const [listings, setlistings] = useState([]);

    //get listings
    useEffect(() => {
        const listingquery = collection(db, "listings");
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
            <SafeAreaView>
                <Topbar navigation={navigation}></Topbar>
                <ScrollView>
                    <View style={styles.container}>
                        {listings.map((listing, i) => {
                            return (
                                /*wrap in a pressable that links to an "item page" component that takes the item as props*/
                                <Listingbox
                                    image={i}
                                    text={listing.description}
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
