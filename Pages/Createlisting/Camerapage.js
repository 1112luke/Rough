import { useCameraPermission, Camera, useCameraDevice } from "react-native-vision-camera";
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { useRef, useState } from "react";
import { Goodbutton } from "../../Components/Goodbutton";

export function Camerapage({route, navigation}) {
    const { setimg } = route.params;

    const { hasPermission, requestPermission } = useCameraPermission();
    const [image, setImage] = useState(null);
    const camera = useRef(null);

    const device = useCameraDevice("back");

    async function handleTakePhoto(){
        const file = await camera.current.takePhoto();
        const result = await fetch(`file://${file.path}`)
        const data = await result.blob();
        setimg(data);
        navigation.navigate("Createlisting");
    }

    if (device == null) return <NoCameraDeviceError />;
    return (
        <>
            <Camera
            ref={camera}
            style = {StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo = {true}
            />
            <SafeAreaView style = {{flex: 1}}>

            {image == null ? 
            <View style = {styles.bottombar}>
                <Goodbutton text = "take photo" onpress = {handleTakePhoto}></Goodbutton>
            </View> : <View style = {{flex:1}}>
                    <Image source={{uri: 'file://' + image.path}} style = {{width: "100%", height: "100%",aspectRatio: 9/16}}></Image>
                </View>

            }

            
            </SafeAreaView>
            

        </>
        

    );
}

const styles = StyleSheet.create({
    bottombar:{
        height: 100,
        width: "100%",
        position: "absolute",
        bottom: 80,
        left: 0,
        backgroundColor: "grey",
        opacity: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },

})