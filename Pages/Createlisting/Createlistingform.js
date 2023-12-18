import { Listingtextbox } from "./Listingtextbox";
import { useState } from "react";

export function Createlistingform() {
    const [description, setdescription] = useState("");

    return (
        <>
            <Listingtextbox
                name="Item description:"
                description="enter item description"
                value={description}
                onChange={setdescription}
            ></Listingtextbox>
        </>
    );
}
