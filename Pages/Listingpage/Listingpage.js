import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { Topbar } from "../../Components/Topbar";
import global from "../../style";
import { Styledtext } from "./Styledtext";

export function Listingpage({ route, navigation }) {
    const { listing, image } = route.params;

    return (
        <>
            <SafeAreaView style={[{ flex: 1 }, global.creme]}>
                <Topbar></Topbar>
                <View style={styles.container}>
                    <View style={styles.verytop}></View>
                    <View style={[styles.top]}>
                        <View
                            style={[
                                ,
                                global.blackshadow,
                                { width: 200, height: 300, shadowRadius: 0 },
                            ]}
                        >
                            <Image
                                style={[
                                    {
                                        width: 200,
                                        height: 300,
                                        borderWidth: 5,
                                        borderRadius: 5,
                                        borderColor: "#65AFFF",
                                    },
                                    global.blueshadow,
                                ]}
                                source={{ uri: URL.createObjectURL(image) }}
                            ></Image>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Styledtext
                            text={listing.name}
                            size={40}
                            margin={40}
                        ></Styledtext>

                        <View style={{ flexDirection: "row" }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Styledtext
                                    pretext="description: "
                                    text={listing.description}
                                    size={20}
                                    margin={20}
                                ></Styledtext>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Styledtext
                                    pretext="size: "
                                    text={listing.size}
                                    size={20}
                                    margin={20}
                                ></Styledtext>
                            </View>
                        </View>

                        <Styledtext
                            text={listing.price}
                            size={40}
                            margin={40}
                        ></Styledtext>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex: 1,
    },
});
