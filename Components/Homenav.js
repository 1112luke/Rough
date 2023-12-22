import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Pages/Home/Home";
import { Listingpage } from "../Pages/Listingpage/Listingpage";

const Stack = createNativeStackNavigator();

export function Homenav() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ animation: "none" }}
                />
                <Stack.Screen
                    name="Listingpage"
                    component={Listingpage}
                    options={{ gestureResponseDistance: 200 }}
                />
            </Stack.Navigator>
        </>
    );
}
