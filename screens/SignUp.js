import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'
import Label from '../components/Label'

export default function SignUp() {
    return (
        <View style={styles.loginSpace}>
            <Title title={'Registrati'}></Title>
            <Label label={'Email'} />
            {/* input nome utente */}
            <Label label={'Nome Utente'} />
            {/* input nome utente */}
            <Label label={'Password'} />
            {/* input password */}
            <Label label={'Ripeti Password'} />
            {/* input password */}
            {/* T&C */}
            {/* bottone accedi */}
            <Text>Hai dimenticato la password?</Text>
            <Text>Non sei iscritto? Registrati!</Text>
        </View>
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