import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { rootNavigation } from '../utility/navigation.js'

import useLoader from "../hooks/useLoader.js"
import AppNavigator from '../navigators/AppNavigator'
import Header from '../components/Header'
import Spacer from '../components/Spacer'

export default function Screens() {
    const loading = useLoader();
    return (
        loading
            ? null
            :
            <NavigationContainer ref={rootNavigation}>
                <Header />
                <AppNavigator />
            </NavigationContainer>
    )
}

