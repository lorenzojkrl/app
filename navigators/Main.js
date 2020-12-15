import React from "react"
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Header from '../components/Header'
import Spacer from '../components/Spacer'


// usare createBottommTabNavigator: https://reactnavigation.org/docs/bottom-tab-navigator/
export default function Main() {
    return (
        <View >
            <Header><Text>Nome Main</Text></Header>
            <Spacer size={30} />


        </View>
    )
}