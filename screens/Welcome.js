import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";

export default function Welcome() {
    return (
        <>
            <View>
                <Text>Benvenuto</Text>
                <Text>Tunztunz</Text>
            </View>
            <Row justify="space-between">
                <Text>Benvenuto</Text>
                <Text>Tunztunz</Text>
            </Row>
        </>
    )
}