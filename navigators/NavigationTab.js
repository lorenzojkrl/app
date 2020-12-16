import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main'
import CardsScreen from './CardsScreen'
import ProfileScreen from './ProfileScreen'
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main"
                component={Main}
                options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="home" size={24} color="black" />), }} />
            <Tab.Screen
                name="Cards"
                component={CardsScreen}
                options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="list" size={24} color="black" />), }} />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: '', tabBarIcon: () => (<FontAwesome name="user" size={24} color="black" />), }} />

        </Tab.Navigator>
    );
}