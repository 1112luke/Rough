import { StyleSheet, View, Text, ScrollView } from "react-native";
import global from "../../style";
import { Listingbox } from "../Home/Listingbox";

export function Proposal({trade, incoming, navigation}){
    //incoming is true of false, being incoming or the other person's proposal. True if I am incoming



    return(
        <View style = {[styles.tradebox, global.bluefill]}>
            <View style = {styles.innerheader}>
                <Text style = {[global.font, {fontSize: 40}]}>{incoming ? "You Get:" : "You Recieve:"}</Text>
            </View>
            <View style = {styles.innerbody}>
            <ScrollView horizontal = {true}>
            {incoming ?
                trade.recieveritems.map((item)=>{
                    return(
                        <Listingbox listing = {item} mode = {"info"} goToPage={()=>{console.log("will navigate later")}} height = {"90%"} width = {100}></Listingbox>
                    );
                }):
                trade.senderitems.map((item)=>{
                    return(
                        <Listingbox listing = {item} mode = {"info"} goToPage={()=>{console.log("will navigate later")}} height = {"90%"} width = {100}></Listingbox>
                    );
                })}
                    </ScrollView>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tradebox:{
        width: "94%",
        marginVertical: "3%",
        flex: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    innerbody:{
        flex: 2,
        width: "100%",
    },
    innerheader:{
        flex: 1,
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
    },  
})