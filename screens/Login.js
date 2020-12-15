import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import Title from '../components/Title'
import Label from '../components/Label'
import Button from '../components/Button'


export default function Login() {
    return (
        <>
            <View style={styles.loginSpace}>
                <Header><Text>Nome App</Text></Header>
                <Title title={'Accedi'}></Title>
                <Label label={'Nome utente / Email'} />
                <Input />
                <Label label={'Password'} />
                <Input isPassword={true} />
                {/* <Button name={'Accedi'}> Accedi </Button> */}
                <Button name={'ACCEDI'} />
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
        justifyContent: 'center',
    }
})