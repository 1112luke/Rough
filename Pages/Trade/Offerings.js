import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { auth } from "../../Components/config/firebase";
import { Submitbutton } from "../../Components/Submitbutton";
import emitter from "../../Components/config/emitter";
import global from "../../style";
import { Listingbox } from "../Home/Listingbox";

export function Offerings({ personid, items, setitems, navigation }) {
    const [innertext, setinnertext] = useState("");

    function goToPage(listing, img) {
        navigation.navigate("Listingpage", { listing: listing, image: img });
    }

    useEffect(() => {
        setinnertext(
            personid == auth.currentUser.uid ? "Your Offering" : "What you want"
        );

        //handle getting selected items from each listing box
        emitter.on("ListingSelected", ({ listing, set }) => {
            //check if listing owner is person
            if (listing.owner == personid) {
                if (set == false) {
                    //add item
                    setitems((prevState) => [...prevState, listing]);
                } else {
                    //remove item
                    setitems((prevState) =>
                        prevState.filter((val) => {
                            if (val.created != listing.created) {
                                return val;
                            }
                        })
                    );
                }
            }
        });
    }, []);

    useEffect(() => {
        items.forEach((item) => {
            console.log(item.name);
        });
    }, [items]);

    return (
        <>
            <View
                style={[
                    global.borders,
                    global.bluefill,
                    global.blackshadow,
                    styles.container,
                ]}
            >
                <View style={[styles.top]}>
                    {items.length == 0 ? (
                        <Text
                            style={[
                                global.font,
                                global.bluefont,
                                { shadowRadius: 0, fontSize: 40 },
                            ]}
                        >
                            {innertext}
                        </Text>
                    ) : (
                        <ScrollView
                            style={[
                                global.creme,
                                {
                                    width: "100%",
                                    flex: 1,
                                    borderRadius: 5,
                                    paddingHorizontal: 10,
                                    paddingBottom: 20,
                                },
                            ]}
                            horizontal={true}
                        >
                            {items.map((item, index) => {
                                return (
                                    <Listingbox
                                        key={index}
                                        listing={item}
                                        goToPage={goToPage}
                                        mode="info"
                                        height="100%"
                                        width={70}
                                    ></Listingbox>
                                );
                            })}
                        </ScrollView>
                    )}
                </View>
                <View style={styles.bottom}>
                    <View style={styles.left}>
                        <Submitbutton
                            name={"+Items from closet"}
                            margin={0}
                            marginHorizontal={0}
                            fontSize={20}
                            onpress={() => {
                                //prevent bug when switching between pages
                                setitems([]);
                                //navigate
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
            </View>
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
