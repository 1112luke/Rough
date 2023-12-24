import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Topbar } from "../../Components/Topbar";
import { collection, onSnapshot, where, query, doc } from "firebase/firestore";
import { db, auth } from "../../Components/config/firebase";
import global from "../../style";
import { Listingbox } from "../Home/Listingbox";

export function Selectioncloset({ route }) {
    const [user, setuser] = useState(null);
    const [closet, setcloset] = useState([]);
    const { personid } = route.params;

    function isMe() {
        if (!user) {
            return true;
        }
        return personid == auth.currentUser.uid;
    }

    useEffect(() => {
        //get user
        const userref = doc(db, "users", personid);

        onSnapshot(userref, (doc) => {
            setuser(doc.data());
        });

        //get items from closet
        const listingref = collection(db, "listings");

        const listingquery = query(listingref, where("owner", "==", personid));

        onSnapshot(listingquery, (snapshot) => {
            const newlistings = [];
            snapshot.docs.forEach((listingdoc) => {
                var listing = listingdoc.data();
                newlistings.push(listing);
            });
            setcloset(newlistings);
        });
    }, []);

    return (
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
                    {isMe() ? "Your Closet: " : `${user.email}'s closet:`}
                </Text>
            </View>
            <FlatList
                data={closet}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return <Listingbox listing={item} key={index}></Listingbox>;
                }}
            />
        </SafeAreaView>
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
    text: {
        fontSize: 60,
        marginTop: 10,
    },
});
