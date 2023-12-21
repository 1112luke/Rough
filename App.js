import { StatusBar } from "expo-status-bar";
import { Mainnav } from "./Components/Mainnav";
import { Signup } from "./Pages/Login/Signup";
import { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Signin } from "./Pages/Login/Signin";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

//add observer for onauthstatechanged to update nav trees depending on user auth

export default function App() {
    const [fontsLoaded] = useFonts({
        "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Signup"
                    screenOptions={{ headerShown: false }}
                >
                    {/*eventually link to a component that only handles tab view and has an initial route to home*/}
                    <Stack.Screen
                        name="Mainnav"
                        component={Mainnav}
                        options={{ animation: "none" }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ animation: "none", gestureEnabled: "false" }}
                    />
                    <Stack.Screen
                        name="Signin"
                        component={Signin}
                        options={{ animation: "none", gestureEnabled: "false" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}
