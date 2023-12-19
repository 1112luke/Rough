import { Listingtextbox } from "./Listingtextbox";
import { Listingradioselection } from "./Listingradioselection";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Submitbutton } from "../../Components/Submitbutton";
import { db } from "../../Components/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import global from "../../style";

export function Createlistingform() {
    const [description, setdescription] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [submitting, setsubmitting] = useState(false);

    async function handleSubmit() {
        setsubmitting(true);

        //push data
        const listingref = collection(db, "listings");
        const data = {
            description: description,
            size: size,
            price: price,
            owner: "luke",
        };
        await addDoc(listingref, data);

        //clear inputs
        setdescription("");
        setsize("");
        setprice("");

        setsubmitting(false);
    }

    return (
        <>
            <Listingtextbox
                name="Description:"
                description="Enter Item Description"
                value={description}
                setvalue={setdescription}
            ></Listingtextbox>
            <Listingradioselection
                name={"Size"}
                options={["XS", "S", "M", "L", "XL"]}
                value={size}
                setvalue={setsize}
            ></Listingradioselection>
            <Listingtextbox
                name="Price:"
                description="Enter Price"
                value={price}
                setvalue={setprice}
            ></Listingtextbox>
            <Submitbutton name="Submit" onpress={handleSubmit}></Submitbutton>
            {submitting && <Text>SUBMITTING</Text>}
        </>
    );
}

const styles = StyleSheet.create({});
