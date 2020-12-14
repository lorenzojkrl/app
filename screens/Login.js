import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'


export default function Login() {
    return (
        <>
            <View style={styles.loginSpace}>
                <Title title={'Accedi'}></Title>
                <Label label={'Nome utente / Email'} />
                <Input />
                <Label label={'Password'} />
                <Input isPassword={true} />
                {/* bottone accedi */}
                <Text>Hai dimenticato la password?</Text>
                <Text>Non sei iscritto? Registrati!</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    loginSpace: {
        flex: 1,
        alignItems: 'center',
    }
})