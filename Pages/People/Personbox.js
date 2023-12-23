import { View, Text, StyleSheet } from "react-native";
import { Submitbutton } from "../../Components/Submitbutton";
import { updateDoc, arrayUnion, arrayRemove, doc } from "firebase/firestore";
import { db } from "../../Components/config/firebase";
import { auth } from "../../Components/config/firebase";
import global from "../../style";

export function Personbox({ person }) {
    async function handleSendFriendRequest() {
        //edit other person document
        const personref = doc(db, "users", person.uid);

        await updateDoc(personref, {
            "friendrequests.recieved": arrayUnion(auth.currentUser.uid),
        });

        //edit own document
        const ownref = doc(db, "users", auth.currentUser.uid);

        await updateDoc(ownref, {
            "friendrequests.sent": arrayUnion(person.uid),
        });
    }

    async function handleAcceptFriendRequest() {
        //remove requsts from both accounts
        const personref = doc(db, "users", person.uid);

        await updateDoc(personref, {
            "friendrequests.sent": arrayRemove(auth.currentUser.uid),
        });

        const ownref = doc(db, "users", auth.currentUser.uid);

        await updateDoc(ownref, {
            "friendrequests.recieved": arrayRemove(person.uid),
        });

        //set friends on both accounts
        await updateDoc(personref, {
            friends: arrayUnion(auth.currentUser.uid),
        });

        await updateDoc(ownref, {
            friends: arrayUnion(person.uid),
        });
    }

    function requestSent() {
        //check if array exists
        if (person.friendrequests) {
            if (person.friendrequests.recieved) {
                for (
                    var i = 0;
                    i < person.friendrequests.recieved.length;
                    i++
                ) {
                    if (
                        person.friendrequests.recieved[i] ==
                        auth.currentUser.uid
                    ) {
                        return true;
                    }
                    return false;
                }
            }
            return false;
        }
    }

    function requestRecieved() {
        //check if array exists
        if (person.friendrequests) {
            if (person.friendrequests.sent) {
                for (var i = 0; i < person.friendrequests.sent.length; i++) {
                    if (person.friendrequests.sent[i] == auth.currentUser.uid) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function isFriend() {
        if (person.friends) {
            for (var i = 0; i < person.friends.length; i++) {
                if (person.friends[i] == auth.currentUser.uid) {
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <>
            <View style={[styles.container, global.bluefill]}>
                <Text>{person.email}</Text>
            </View>

            {requestRecieved() ? (
                <Submitbutton
                    name="Accept Friend Request"
                    onpress={handleAcceptFriendRequest}
                ></Submitbutton>
            ) : isFriend() ? (
                <Submitbutton
                    name="Already Friends!"
                    onpress={() => {}}
                ></Submitbutton>
            ) : (
                <Submitbutton
                    name={requestSent() ? "Request Sent!" : "Add Friend"}
                    onpress={handleSendFriendRequest}
                ></Submitbutton>
            )}
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
