import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'
import Header from '../components/Header'


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header><Text>Nome App</Text></Header>

            </View>

            <View style={styles.loginSpace}>
                <Title title={'Grazie'}></Title>
                <View style={styles.text__container}>
                    <Text style={styles.text}>Benvenuto nella nostra app. Prima di continuare controlla la tua mail e verifica l'indirizzo cliccando sul link che ti abbiamo inviato</Text>

                </View>

                {/* bottone accedi */}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 0.2,

    },
    loginSpace: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text__container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 15,
        lineHeight:25,
        fontWeight: '500',
        textAlign: 'center'
    }
})