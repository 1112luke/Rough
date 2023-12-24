import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { auth } from "../../Components/config/firebase";
import { Submitbutton } from "../../Components/Submitbutton";
import global from "../../style";

export function Offerings({ personid, items, setitems, navigation }) {
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
                <View style={styles.top}>
                    <Text
                        style={[
                            global.font,
                            global.bluefont,
                            { shadowRadius: 0, fontSize: 40 },
                        ]}
                    >
                        {innertext}
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.left}>
                        <Submitbutton
                            name={"+Items from closet"}
                            margin={0}
                            marginHorizontal={0}
                            fontSize={20}
                            onpress={() => {
                                navigation.navigate("Selectioncloset", {
                                    personid: personid,
                                });
                            }}
                        ></Submitbutton>
                    </View>

                    <View style={styles.right}>
                        <Submitbutton
                            name={"+$"}
                            margin={0}
                            marginHorizontal={0}
                            fontSize={20}
                        ></Submitbutton>
                    </View>
                </View>
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
        width: "90%",
    },
    top: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        width: "80%",
    },
    bottom: {
        flex: 1,
        flexDirection: "row",
    },
    left: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
