import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Pages/Home/Home";
import { Createlisting } from "../Pages/Createlisting/Createlisting";

const Tab = createBottomTabNavigator();

export function Mainnav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: "absolute" },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Createlisting" component={Createlisting} />
        </Tab.Navigator>
    );
}