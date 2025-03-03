import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./login";

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}