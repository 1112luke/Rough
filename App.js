import { StatusBar } from "expo-status-bar";
import { Homenav } from "./Components/Homenav";
import { Createlisting } from "./Pages/Createlisting/Createlisting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Signup } from "./Pages/Login/Signup";
import { useCallback, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Signin } from "./Pages/Login/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/config/firebase";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//add observer for onauthstatechanged to update nav trees depending on user auth

export default function App() {
    const [user, setuser] = useState(auth.currentUser);

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

    //listentoauthchange
    onAuthStateChanged(auth, (newuser) => {
        setuser(newuser);
    });

    return (
        <>
            <NavigationContainer>
                {user == null ? (
                    <>
                        <Stack.Navigator
                            initialRouteName="Signup"
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen
                                name="Signup"
                                component={Signup}
                                options={{
                                    animation: "none",
                                    gestureEnabled: "false",
                                }}
                            />
                            <Stack.Screen
                                name="Signin"
                                component={Signin}
                                options={{
                                    animation: "none",
                                    gestureEnabled: "false",
                                }}
                            />
                        </Stack.Navigator>
                    </>
                ) : (
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarStyle: {
                                position: "absolute",
                                backgroundColor: "#F7EDD8",
                            },
                        }}
                    >
                        <Tab.Screen name="Homenav" component={Homenav} />
                        <Tab.Screen
                            name="Createlisting"
                            component={Createlisting}
                        />
                    </Tab.Navigator>
                )}
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}
