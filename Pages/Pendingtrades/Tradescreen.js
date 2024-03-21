import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Topbar } from "../../Components/Topbar";
import global from "../../style"
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Proposal } from "./Proposal";
import { auth } from "../../Components/config/firebase";

export function Tradescreen({route}){

    const {trade, status, navigation} = route.params;

    return(
        <>
            <SafeAreaView style = {[global.creme, {flex: 1, justifyContent:"center", alignItems: "center",}]}>
                <Topbar></Topbar>
                        <Proposal trade = {trade} incoming = {(status == "sent")} navigation = {navigation}></Proposal>
                        <View style = {{flex: 0.1}}></View>
                        <Proposal trade = {trade} incoming = {(status != "sent")} navigation = {navigation}></Proposal>
                        <View style = {{flex:1}}></View>
            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom:{
        flex:1,
        backgroundColor: "red",
    },
})