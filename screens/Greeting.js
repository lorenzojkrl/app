import React from "react";
import { View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function Greeting({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.loginSpace}>
                <Title title={'Grazie'} />
                <Paragraph align="center">
                    Benvenuto nella nostra app. Prima di continuare controlla la tua mail e verifica l'indirizzo cliccando sul link che ti abbiamo inviato
                </Paragraph>
                <Button
                    name={'LOGIN'}
                    submit={() => navigation.navigate('Login')}
                />
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
})