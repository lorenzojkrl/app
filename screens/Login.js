import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'


export default function Login() {
    return (
        <>
            <View style={styles.loginSpace}>
                <Title title={'Accedi'}></Title>
                {/* label nome utente */}
                {/* input nome utente */}
                {/* label password */}
                {/* input password */}
                {/* bottone accedi */}
                <Text>Hai dimenticato la password?</Text>
                <Text>Non sei iscritto? Registrati!</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    loginSpace: {
        flex: 1,
        alignItems: 'center',
    }
})