import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from "./Auth.js";
import Main from "./Main.js";
import { AuthContext } from '../context/AuthContext'

const AppStack = createStackNavigator()

export default function AppNavigator() {
    const { token } = useContext(AuthContext)


    return (
        <AppStack.Navigator
            initialRouteName={token ? "Main" : "Auth"}

            initialRouteName={"Auth"}
            screenOptions={{
                headerShown: false,
                cardStyle: { paddingTop: 0 },
            }}
        >
            <AppStack.Screen name="Auth" component={Auth} />
            <AppStack.Screen name="Main" component={Main} />

        </AppStack.Navigator>
    )
}
