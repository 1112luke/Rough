import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

export function Error(props){
    var errorid = props.errorid;
    return(
        <>
            {(errorid == "id") && <Text style = {styles.er}>ID Error</Text>}
            {(errorid == "pass") && <Text style = {styles.er}>Password Error</Text>}
            {(errorid == "both") && <Text style = {styles.er}>Both Error</Text>}
            {(errorid == "") && <Text style = {{color: "white",}}>filler</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    er: {
        color: "red",
    }
})