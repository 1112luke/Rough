import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { Topbar } from "../../Components/Topbar";
import { Listingbox } from "./Listingbox";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db, auth } from "../../Components/config/firebase";
import global from "../../style";

export function Home({ navigation }) {
    const [listings, setlistings] = useState([]);
    const [refreshing, setrefreshing] = useState(false);

    var refresh = 1;

    //get listings -- eventually this will be a more advanced query
    //todo eventually remove onsnapshot and make a get rather than listener. bind this to pullup refresh.
    //todo make sure all items are visible at bottom of page // potentially insert blank elements into listings before render
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

    //all this is only to test pullup on refresh
    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function Refresh() {
        refresh++;
        setrefreshing(true);
        await timeout(3000);
        setrefreshing(false);
    }

    function goToPage(listing, img) {
        navigation.navigate("Listingpage", { listing: listing, image: img });
    }

    return (
        <>
            <SafeAreaView style={[global.creme, { flex: 1 }]}>
                <Topbar navigation={navigation}></Topbar>
                {listings.length == 0 ? (
                    <View style={styles.container}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={[
                                    global.font,
                                    {
                                        fontSize: 30,
                                        textAlign: "center",
                                    },
                                ]}
                            >
                                Nothing Here...
                            </Text>
                        </View>
                    </View>
                ) : (
                    <FlatList
                        data={listings}
                        numColumns={2}
                        onRefresh={Refresh}
                        initialNumToRender={1}
                        refreshing={refreshing}
                        renderItem={({ item, index }) => {
                            return (
                                <Listingbox
                                    listing={item}
                                    goToPage={goToPage}
                                    mode="info"
                                    key={index}
                                ></Listingbox>
                            );
                        }}
                    />
                )}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
    },
});
