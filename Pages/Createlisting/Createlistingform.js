import { Listingtextbox } from "./Listingtextbox";
import { Listingradioselection } from "./Listingradioselection";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Submitbutton } from "../../Components/Submitbutton";
import global from "../../style";

export function Createlistingform({
    description,
    setdescription,
    size,
    setsize,
    price,
    setprice,
    submitting,
    handlesubmit,
}) {
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
            <Submitbutton name="Submit" onpress={handlesubmit}></Submitbutton>
            {submitting && <Text>SUBMITTING</Text>}
        </>
    );
}

const styles = StyleSheet.create({});
