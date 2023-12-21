import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Goodbutton } from "../../Components/Goodbutton";
import { auth } from "../../Components/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import global from "../../style";

export function Signinform(props) {
    const [id, setid] = useState("");
    const [pass, setpass] = useState("");

    useEffect(() => {
        props.seterror("");
    }, [pass]);

    useEffect(() => {
        props.seterror("");
    }, [id]);

    async function handleSignIn() {
        //setusername for testing
        setid("lukescholler@gmail.com");
        setpass("1122Greeny..");

        //error handling
        if (pass == "" && id == "") {
            props.seterror("both");
        } else if (id == "") {
            props.seterror("id");
        } else if (pass == "") {
            props.seterror("pass");
        }

        //successful signin
        else {
            setid("");
            setpass("");
            props.seterror("");

            //signin
            try {
                await signInWithEmailAndPassword(auth, id, pass);
            } catch (e) {
                console.log(e.code);
            }
        }
    }

    return (
        <>
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
                secureTextEntry={true}
                onChangeText={(newText) => {
                    setpass(newText);
                }}
            />
            <Goodbutton onpress={handleSignIn}></Goodbutton>
            <View style={{ marginTop: 5, flexDirection: "row" }}>
                <Text style={{ fontSize: 10, color: "grey" }}>
                    Forgot Password?
                </Text>
                <View style={{ flex: 0.1 }}></View>
                <Pressable
                    onPress={() => {
                        props.navigation.navigate("Signin");
                    }}
                >
                    <Text style={{ fontSize: 10, color: "grey" }}>
                        Already have an account?
                    </Text>
                </Pressable>
            </View>
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
