import { Text, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { Goodbutton } from "../../Components/Goodbutton";

export function Loginform(props) {
    const [id, setid] = useState("");
    const [pass, setpass] = useState("");

    useEffect(() => {
        props.seterror("");
    }, [pass]);

    useEffect(() => {
        props.seterror("");
    }, [id]);

    function handleSignIn() {
        console.log(id, pass);
        if (pass == "" && id == "") {
            props.seterror("both");
        } else if (id == "") {
            props.seterror("id");
        } else if (pass == "") {
            props.seterror("pass");
        }

        //successful login
        else {
            setid("");
            setpass("");
            props.seterror("");
            props.navigation.navigate("Home");
        }
    }

    return (
        <>
            <Text style={{ color: "black", fontSize: 40, marginBottom: 40 }}>
                SIGN IN
            </Text>
            <TextInput
                style={[
                    styles.input,
                    (props.errorid == "both" || props.errorid == "id") &&
                        styles.invalid,
                ]}
                value={id}
                placeholder="Notre Dame NetID"
                onChangeText={(newText) => {
                    setid(newText);
                }}
            />
            <TextInput
                style={[
                    styles.input,
                    (props.errorid == "both" || props.errorid == "pass") &&
                        styles.invalid,
                ]}
                value={pass}
                placeholder="Password"
                onChangeText={(newText) => {
                    setpass(newText);
                }}
            />
            <Goodbutton onpress={handleSignIn}></Goodbutton>
            <Text style={{ fontSize: 10, color: "grey", marginTop: 5 }}>
                Forgot Password?
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        textAlign: "left",
        color: "grey",
        borderWidth: 1,
        height: 40,
        borderColor: "grey",
        textAlign: "center",
        borderRadius: 4,
        width: 300,
        marginTop: 10,
    },
    invalid: {
        borderColor: "red",
    },
});
