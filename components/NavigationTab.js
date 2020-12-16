import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabIcons from '../config/TabIcons'

import AppNavigator from '../navigators/AppNavigator'
import Login from '../screens/Login'
import Greeting from '../screens/Greeting'
import SignUp from '../screens/SignUp'


const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Login} />
          <Tab.Screen name="CardsList" component={Greeting} />
          <Tab.Screen name="Profile" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
      
    )
}

