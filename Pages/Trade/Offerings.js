import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { auth } from "../../Components/config/firebase";
import global from "../../style";

export function Offerings({ personid, items, setitems }) {
    const [innertext, setinnertext] = useState("");

    useEffect(() => {
        setinnertext(
            personid == auth.currentUser.uid ? "Your Offering" : "What you want"
        );
    }, []);

    return (
        <>
            <Pressable
                style={[
                    global.borders,
                    global.bluefill,
                    global.blackshadow,
                    styles.container,
                ]}
            >
                <Text
                    style={[
                        global.font,
                        global.bluefont,
                        { shadowRadius: 0, fontSize: 40 },
                    ]}
                >
                    {innertext}
                </Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowRadius: 0,
        borderWidth: 3,
        opacity: 50,
        width: 300,
    },
});
