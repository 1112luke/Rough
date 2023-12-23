import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Searchbar } from "../../Components/Searchbar";
import { Personbox } from "./Personbox";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { auth } from "../../Components/config/firebase";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../../Components/config/firebase";
import global from "../../style";

export function Peoplebox() {
    const tabBarHeight = useBottomTabBarHeight();
    const [searchtext, setsearchtext] = useState("");
    const [people, setpeople] = useState([]);

    //get new people when textbox is updated
    useEffect(() => {
        //getnewpeople based on text
        //TODO: use typesense to efficiently search this data
        //currently showing all people besides user
        const usersref = collection(db, "users");
        const usersquery = query(
            usersref,
            where("uid", "!=", auth.currentUser.uid)
        );
        onSnapshot(usersquery, (snapshot) => {
            const newpeople = [];
            snapshot.docs.forEach((persondoc) => {
                var person = persondoc.data();
                newpeople.push(person);
            });
            setpeople(newpeople);
        });
    }, [searchtext]);

    return (
        <>
            <View
                style={[
                    styles.container,
                    global.blueborder,
                    global.blueshadow,
                    global.blue,
                    { marginBottom: tabBarHeight },
                ]}
            >
                <View style={styles.top}>
                    <Searchbar
                        value={searchtext}
                        setvalue={setsearchtext}
                        filler="Search People"
                    ></Searchbar>
                </View>

                <ScrollView style={styles.bottom}>
                    {people.map((person, i) => {
                        return <Personbox person={person} key={i}></Personbox>;
                    })}
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,
        flex: 1,
    },
    top: {
        flex: 0.0,
        marginTop: 10,
    },
    bottom: {
        margin: 10,
        marginTop: 20,
        flex: 3,
    },
});
