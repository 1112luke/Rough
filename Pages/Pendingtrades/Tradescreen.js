import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Topbar } from "../../Components/Topbar";

export function Tradescreen({route}){

    const {trade, navigation} = route.params;

    return(
        <>
            <SafeAreaView>
                <Topbar></Topbar>
                <View style = {styles.container}>
                    <View style = {styles.header}><Text>hi</Text></View>
                    <View style = {styles. bottom}><Text>hi</Text></View>
                </View>
            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        backgroundColor: "blue",
        flex: 1,
    },
    bottom:{
        flex:5,
        backgroundColor: "red",
    }
})