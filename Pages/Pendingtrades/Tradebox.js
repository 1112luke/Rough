import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Components/config/firebase";
import global from "../../style";

export function Tradebox({ trade, status, navigation }) {
    const [personloading, setpersonloading] = useState(true);
    const [person, setperson] = useState();
    //status is sent or recieved

    useEffect(() => {
        //gat name of person to list in box
        setpersonloading(true);
        var otherperson = status == "sent" ? trade.reciever : trade.sender;

        const personref = doc(db, "users", otherperson);

        getDoc(personref).then((snapshot) => {
            var person = snapshot.data();
            setperson(person);
            setpersonloading(false);
        });
    }, []);

    return (
        <Pressable style={[styles.container]} onPress={() => navigation.navigate("Tradescreen", {trade: trade, status: status})}>
            <View style={[styles.left]}>
                <Text style={[global.font, { fontSize: 20 }]}>
                    {personloading
                        ? "loading"
                        : status == "sent"
                        ? `To: ${person.email}`
                        : `From: ${person.email}`}
                </Text>
            </View>
            <View style={[styles.right]}>
                <Text style={[global.font, { fontSize: 20 }]}>{">"}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        flex: 1,
        borderBottomWidth: 1,
    },
    left: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
