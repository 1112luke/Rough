import { View, Text, StyleSheet } from "react-native";
import { Submitbutton } from "../../Components/Submitbutton";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from "../../Components/config/firebase";
import { auth } from "../../Components/config/firebase";
import global from "../../style";

export function Personbox({ person }) {
    async function handleAddFriend() {
        //edit other person document
        const personref = doc(db, "users", person.uid);

        await updateDoc(personref, {
            recievedRequests: arrayUnion(auth.currentUser.uid),
        });

        //edit own document
        const ownref = doc(db, "users", auth.currentUser.uid);

        await updateDoc(ownref, {
            sentRequests: arrayUnion(person.uid),
        });
    }

    function alreadySent() {
        //check if array exists
        if (person.recievedRequests) {
            for (var i = 0; i < person.recievedRequests.length; i++) {
                if ((person.recievedRequests[i] = auth.currentUser.uid)) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    return (
        <>
            <View style={[styles.container, global.bluefill]}>
                <Text>{person.email}</Text>
            </View>
            <Submitbutton
                name={alreadySent() ? "request sent!" : "Add Friend"}
                onpress={handleAddFriend}
            ></Submitbutton>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 3,
    },
});
