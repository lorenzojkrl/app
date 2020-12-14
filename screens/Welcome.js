import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";
import Title from '../components/Title'
import Login from './Login'

export default function Welcome() {
    return (
        <View style={styles.welcomeMain}>
            <Login />
            {/* <View style={styles.loginSpace}>
                <Title title={'MammaTua!'}></Title>
            </View> */}
            {/* <Row justify="space-between"></Row> */}
            {/* <View style={styles.login}>
                <Text>Benvenuto</Text>
                <Text>Tunztunz</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeMain: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },

})