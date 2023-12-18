import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Topbar } from "../../Components/Topbar";
import { Listingbox } from "./Listingbox";

export function Home({navigation}) {
    var items = [
        { description: "sweater, nicely worn, Large" },
        { description: "shirt, bad, medium" },
        { description: "awful socks low" },
        { description: "sweet nasa socks, large" },
        { description: "sweater, nicely worn, Large" },
        { description: "shirt, bad, medium" },
        { description: "awful socks low" },
        { description: "sweet nasa socks, large" },
        { description: "sweater, nicely worn, Large" },
        { description: "shirt, bad, medium" },
        { description: "awful socks low" },
        { description: "sweet nasa socks, large" },
        { description: "sweet nasa socks, large" },
    ];

    return (
        <>
            <SafeAreaView>
                <Topbar navigation = {navigation}></Topbar>
                <ScrollView>
                    <View style={styles.container}>
                        {items.map((item, i) => {
                            return (
                                /*wrap in a pressable that links to an "item page" component that takes the item as props*/
                                <Listingbox
                                    image={i}
                                    text={item.description}
                                    style={styles.listing}
                                    key="i"
                                ></Listingbox>
                            );
                        })}
                        <View style={{ height: 300 }}>
                            <Text style={{ color: "white" }}>.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

/*
function getlistingboxes(){
    //create array with subarrays of rows
    var newitems = []
    for(var i = 0; i < items.length; i++){
        var out = []
        for(var j = 0; j < 2, j++){
            out.push[items[j + i*2]]
        }
    }
}
*/
