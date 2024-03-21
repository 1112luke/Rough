import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pendingtrades } from "../Pages/Pendingtrades/Pendingtrades";
import { Tradescreen } from "../Pages/Pendingtrades/Tradescreen";

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
                    name="Tradescreen"
                    component={Tradescreen}
                    options={{ animation: "none" }}
                />
            </Stack.Navigator>
        </>
    );
}