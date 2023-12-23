import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { People } from "../Pages/People/People";
import { Trade } from "../Pages/Trade/Trade";

const Stack = createNativeStackNavigator();

export function Peoplenav() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="People"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="People"
                    component={People}
                    options={{ animation: "none" }}
                />
                <Stack.Screen
                    name="Trade"
                    component={Trade}
                    options={{ gestureResponseDistance: 200 }}
                />
            </Stack.Navigator>
        </>
    );
}