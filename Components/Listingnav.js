import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Createlisting } from "../Pages/Createlisting/Createlisting";
import { Camerapage } from "../Pages/Createlisting/Camerapage";

const Stack = createNativeStackNavigator();

export function Listingnav() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Createlisting"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Createlisting"
                    component={Createlisting}
                    options={{ animation: "none" }}
                />
                <Stack.Screen
                    name="Camerapage"
                    component={Camerapage}
                    options={{ gestureResponseDistance: 200 }}
                />
            </Stack.Navigator>
        </>
    );
}
