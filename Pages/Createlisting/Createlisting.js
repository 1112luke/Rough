import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Createlistingform } from "./Createlistingform";
import { db } from "../../Components/config/firebase";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth } from "../../Components/config/firebase";
import uuid from "react-native-uuid";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import global from "../../style";
import { Goodbutton } from "../../Components/Goodbutton";

export function Createlisting({navigation}) {
    const tabBarHeight = useBottomTabBarHeight();
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [img, setimg] = useState(null);
    const [submitting, setsubmitting] = useState(false);

    async function handleSubmit(navigation) {
        setsubmitting(true);

        var imgid = uuid.v4();
        var listingid = uuid.v4();

        //push image
        const storage = getStorage();
        const storageRef = ref(storage, `images/${imgid}`);
        await uploadBytes(storageRef, img);

        //push data
        const listingref = doc(db, "listings", `${listingid}`);
        const data = {
            name: name,
            description: description,
            size: size,
            price: price,
            image: imgid,
            owner: auth.currentUser.uid,
            id: listingid,
            created: serverTimestamp(),
        };
        await setDoc(listingref, data);

        //clear inputs
        setname("");
        setdescription("");
        setsize("");
        setprice("");

        //clear image
        setimg(null);

        //stop submitting;
        setsubmitting(false);
    }

    return (
        <>
            <SafeAreaView style={[styles.container, global.creme]}>
                <View style={styles.imagebox}>
                    {(img == null) ? (
                        <Text>Add Image</Text>
                    ) : (
                        <Image
                            style={styles.image}
                            source={{ uri: URL.createObjectURL(img) }}
                        ></Image>
                    )}
                </View>
                <View style = {{width: "100%", justifyContent: "center", alignItems: "center",}}>
                    <Goodbutton onpress = {() => navigation.navigate("Camerapage", {setimg: setimg,})} text = "Take photo"></Goodbutton>
                </View>
                
                <View
                    style={[styles.formwrapper, { marginBottom: tabBarHeight }]}
                >
                    <Createlistingform
                        name={name}
                        setname={setname}
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
