import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'
import Label from '../components/Label'
import Button from '../components/Button'


export default function Login() {
    return (
        <>
            <View style={styles.loginSpace}>
                <Title title={'Accedi'}></Title>
                <Label label={'Nome utente / Email'} />
                {/* input nome utente */}
                <Label label={'Password'} />
                {/* input password */}
                {/* bottone accedi */}
                <Button>Accedi</Button>
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