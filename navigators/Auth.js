import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login.js"
import SignUp from "../screens/SignUp.js"
import Greeting from "../screens/Greeting.js"

const Stack = createStackNavigator()

export default function Auth() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Greeting"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Greeting" component={Greeting} />
        </Stack.Navigator>
    )
}