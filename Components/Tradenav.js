import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pendingtrades } from "../Pages/Pendingtrades/Pendingtrades";
import { Trade } from "../Pages/Trade/Trade";

const Stack = createNativeStackNavigator();

export function Tradenav() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Pendingtrades"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Pendingtrades"
                    component={Pendingtrades}
                    options={{ animation: "none" }}
                />
                <Stack.Screen
                    name="Trade"
                    component={Trade}
                    options={{ animation: "none" }}
                />
            </Stack.Navigator>
        </>
    );
}