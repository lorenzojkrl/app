import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login.js"
import Welcome from "../screens/Welcome.js"
import SignUp from "../screens/SignUp.js"

const Stack = createStackNavigator()

export default function Auth() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }} 
            initialRouteName="Welcome"
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}