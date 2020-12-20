import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Main from './Main'
import CardsStackNav from './CardsStackNav'
import ProfileScreen from './ProfileScreen'


const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    showIcon: true,
                    inactiveBackgroundColor: 'black', // Not working at all.
                    activeBackgroundColor: 'orange',
                    style: { backgroundColor: '#3498DB', height: 40, padding: 0, margin: 0 }
                }}>

                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="home" size={24} color="white" />), }}
                />
                <Tab.Screen
                    name="Cards"
                    component={CardsStackNav}
                    options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="list" size={24} color="white" />), }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="user" size={24} color="white" />), }}
                />

            </Tab.Navigator>
        </>
    );
}