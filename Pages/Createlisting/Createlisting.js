import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Createlistingform } from "./Createlistingform";
import { db } from "../../Components/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import uuid from "react-native-uuid";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import global from "../../style";

export function Createlisting() {
    const tabBarHeight = useBottomTabBarHeight();
    const [description, setdescription] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [img, setimg] = useState(null);
    const [imgloading, setimgloading] = useState(true);
    const [submitting, setsubmitting] = useState(false);

    async function handleSubmit() {
        setsubmitting(true);

        var imgid = uuid.v4();

        //push image
        const storage = getStorage();
        const storageRef = ref(storage, `images/${imgid}`);
        await uploadBytes(storageRef, img);
        console.log("uploaded");

        //push data
        const listingref = collection(db, "listings");
        const data = {
            description: description,
            size: size,
            price: price,
            image: imgid,
            owner: "luke",
        };
        await addDoc(listingref, data);

        //clear inputs
        setdescription("");
        setsize("");
        setprice("");

        setsubmitting(false);
    }

    async function getimage() {
        setimgloading(true);
        var res = await fetch("https://picsum.photos/200/300", {
            cache: "no-cache",
        });
        var image = await res.blob();
        setimg(image);
        setimgloading(false);
    }

    useEffect(() => {
        getimage();
    }, []);

    return (
        <>
            <SafeAreaView style={[styles.container, global.creme]}>
                <View style={styles.imagebox}>
                    {imgloading ? (
                        <Text>LOADING</Text>
                    ) : (
                        <Image
                            style={styles.image}
                            source={{ uri: URL.createObjectURL(img) }}
                        ></Image>
                    )}
                </View>
                <View
                    style={[styles.formwrapper, { marginBottom: tabBarHeight }]}
                >
                    <Createlistingform
                        description={description}
                        setdescription={setdescription}
                        size={size}
                        setsize={setsize}
                        price={price}
                        setprice={setprice}
                        submitting={submitting}
                        handlesubmit={handleSubmit}
                    ></Createlistingform>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 0,
        margin: 0,
    },
    imagebox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formwrapper: {
        flex: 2,
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 5,
        borderColor: "#65AFFF",
        borderRadius: 5,
    },
});
