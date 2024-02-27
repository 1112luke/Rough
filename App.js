import { StatusBar } from "expo-status-bar";
import { Homenav } from "./Components/Homenav";
import { Peoplenav } from "./Components/Peoplenav";
import { Listingnav } from "./Components/Listingnav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Signup } from "./Pages/Login/Signup";
import { useCallback, useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Signin } from "./Pages/Login/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./Components/config/firebase";
import * as SplashScreen from "expo-splash-screen";
import { Pendingtrades } from "./Pages/Pendingtrades/Pendingtrades";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//add observer for onauthstatechanged to update nav trees depending on user auth

export default function App() {
    const [user, setuser] = useState(auth.currentUser);

    /* this is VERYVERY NOT GOOD TO DO EVERYTIME. fix this by placing in singup form after email verification is done or get better logic to only run if  */
    //listentoauthchange
    onAuthStateChanged(auth, (newuser) => {
        if (newuser != null) {
            const newuserref = doc(db, `users/`, newuser.uid);
            const data = {
                uid: newuser.uid,
                email: newuser.email,
            };
            getDoc(newuserref).then((snapshot) => {
                if (!snapshot.exists()) {
                    setDoc(newuserref, data).then(() => {
                        setuser(newuser);
                    });
                } else {
                    setuser(newuser);
                }
            });
        } else {
            setuser(newuser);
        }
    });

    //used to persist user if still logged in -- subject to much change, only testing currently **NOT WORKING**
    useEffect(() => {
        if (auth.currentUser) {
            setuser(auth.currentUser);
        }
    }, []);

    //handle fonts
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
                {/* use user.emailverified in future */}
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
                            name="Listingnav"
                            component={Listingnav}
                        />
                        <Tab.Screen name="Peoplenav" component={Peoplenav} />
                        <Tab.Screen
                            name="Pendingtrades"
                            component={Pendingtrades}
                        />
                    </Tab.Navigator>
                )}
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}
