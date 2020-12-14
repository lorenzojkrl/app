import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";

export default function Welcome() {
    return (
        <View style={styles.welcomeMain}>
            <View style={styles.login}>
                <Text>ACCEDI</Text>
                <Text>Tunztunz</Text>
            </View>
            <Row justify="space-between">
                <Text>Benvenuto</Text>
                <Text>Tunztunz</Text>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeMain: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    login: {
        flex: 1,
        alignItems: 'center',
    }
})