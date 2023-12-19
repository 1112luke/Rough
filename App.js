import { StatusBar } from "expo-status-bar";
import { Mainnav } from "./Components/Mainnav";
import { Login } from "./Pages/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{ headerShown: false }}
                >
                    {/*eventually link to a component that only handles tab view and has an initial route to home*/}
                    <Stack.Screen
                        name="Mainnav"
                        component={Mainnav}
                        options={{ animation: "none" }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ animation: "none", gestureEnabled: "false" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}
