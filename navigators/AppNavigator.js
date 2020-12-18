import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from "./Auth.js";
import NavigationTab from './NavigationTab'
import { AuthContext } from '../context/AuthContext'



const AppStack = createStackNavigator()

export default function AppNavigator() {
    const { token } = useContext(AuthContext)


    return (
        <AppStack.Navigator
            initialRouteName={token ? "NavigationTab" : "Auth"}
            screenOptions={{
                headerShown: false,
                cardStyle: { paddingTop: 0 },
            }}
        >
            <AppStack.Screen name="Auth" component={Auth} />
            <AppStack.Screen name="NavigationTab" component={NavigationTab} />

        </AppStack.Navigator>
    )
}
