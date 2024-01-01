import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import global from "../../style.js";
import emitter from "../../Components/config/emitter.js";

export function Listingbox({ listing, goToPage, mode, height, width }) {
    const [img, setimg] = useState(null);
    const [imgloading, setimgloading] = useState(true);
    const [selected, setselected] = useState(false);
    const [pressed, setpressed] = useState(false);
    const storage = getStorage();

    if (height == null) {
        var height = 200;
    }

    async function getImage() {
        setimgloading(true);
        const imagelocation = ref(storage, `images/${listing.image}`);
        const url = await getDownloadURL(imagelocation);
        const res = await fetch(url, { cache: "no-cache" });
        const blo = await res.blob();
        setimg(blo);
        setimgloading(false);
    }

    useEffect(() => {
        getImage();
    }, [listing]);

    function emitSelected(listing) {
        const data = { listing: listing, set: selected };

        emitter.emit("ListingSelected", data);
    }

    return (
        <>
            {/*use outer view to allow flex display to function properly with the margin*/}
            <Pressable
                onPressIn={() => {
                    if (mode != "selection") {
                        setpressed(true);
                    }
                    //handle selected logic for close pages
                    if (mode == "selection") {
                        if (!selected) {
                            emitSelected(listing);
                            console.log("selected");
                        } else if (selected) {
                            emitSelected(listing);
                            console.log("notselected");
                        }
                        setselected(!selected);
                    }
                }}
                onPressOut={() => {
                    setpressed(false);
                }}
                onPress={() => {
                    //pass listing and listing image that is already fetched to listingpage
                    if (mode == "info") {
                        goToPage(listing, img);
                    }
                }}
                style={[styles.outer]}
            >
                <View
                    style={[
                        global.borders,
                        styles.container,
                        pressed && styles.pressed,
                        selected && styles.selected,
                    ]}
                >
                    <View
                        style={[
                            styles.top,
                            global.creme,
                            { overflow: "hidden" },
                        ]}
                    >
                        {imgloading ? (
                            <Text style={[global.font, { fontSize: 15 }]}>
                                LOADING
                            </Text>
                        ) : (
                            <Image
                                style={[styles.image]}
                                source={{ uri: URL.createObjectURL(img) }}
                            ></Image>
                        )}
                    </View>
                    <View
                        style={[
                            styles.bottom,
                            global.bluefill,
                            selected && { backgroundColor: "#65AFFF" },
                        ]}
                    >
                        <Text
                            style={[
                                global.font,
                                ,
                                { fontSize: 20, textAlign: "center" },
                            ]}
                        >
                            {`${listing.name.toUpperCase()} - ${listing.size}`}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    outer: {
        flexBasis: "50%",
    },
    container: {
        flexDirection: "column",
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        height: 200,
        shadowColor: "black",
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },
    top: {
        justifyContent: "center",
        alignItems: "center",
        flex: 3,
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    image: {
        width: 180,
        height: "100%",
    },
    pressed: {
        shadowOpacity: 0,
        transform: [{ translateX: -3 }, { translateY: 4 }],
    },
    selected: {
        shadowColor: "#65AFFF",
        transform: [{ translateX: -3 }, { translateY: 4 }],
        shadowOpacity: 100,
        shadowRadius: 10,
        shadowOffset: 0,
        borderColor: "#65AFFF",
    },
});
