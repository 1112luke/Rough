import { Listingtextbox } from "./Listingtextbox";
import { Listingradioselection } from "./Listingradioselection";
import { useState } from "react";

export function Createlistingform() {
    const [description, setdescription] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");

    return (
        <>
            <Listingtextbox
                name="Item description:"
                description="enter item description"
                value={description}
                onChange={setdescription}
            ></Listingtextbox>
            <Listingradioselection
                name={"Size"}
                options={["S", "M", "L"]}
                value={size}
                setvalue={setsize}
            ></Listingradioselection>
            <Listingtextbox
                name="Price"
                description="enter price"
                value={price}
                onChange={setprice}
            ></Listingtextbox>
        </>
    );
}
