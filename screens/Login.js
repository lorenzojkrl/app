import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import { AuthContext } from '../context/AuthContext'

import Title from '../components/Title'
import Spacer from '../components/Spacer'
import Button from '../components/Button'

import useForm from '../hooks/useForm'
import Form from '../components/Form'

import { rootNavigation } from '../utility/navigation.js'
import api from '../utility/api'


const inputs = [
    { label: 'Username', name: 'username_email' },
    { label: 'Password', name: 'password', secureTextEntry: true },
]

// Credentials
// Lorenzo name: utente_26@mail.com
// Alessandro name: utente_4@mail.com
// Alfonso name: utente_7@mail.com

// password: Password1!

export default function Login({ navigation }) {
    const requiredInputs = ['username_email', 'password']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [loading, setLoading] = useState(false)
    const { manageUserData } = useContext(AuthContext)

    const [error, setError] = useState(false)
    const [messageOpen, setMessageOpen] = useState(false)

    const submitLogin = async () => {
        try {
            setLoading(true)
            const response = await api.post('authentication/login-action', formData.values)
            const { result, errors, payload } = response
            if (result) {
                manageUserData(payload)
                rootNavigation.current.navigate('NavigationTab')
            } else {
                setError(errors[0].message)
                setMessageOpen(true)
            }
        } catch (err) {
            console.warn(err)
            setError(err)
            setMessageOpen(true)

        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">

                <View style={styles.loginSpace}>
                    <Spacer size={10} />
                    {
                        messageOpen
                            ? <View style={styles.errorContainer}>
                                <Text style={styles.textError}>ATTENTION! {error}</Text>
                            </View>
                            : null
                    }
                    <Title title={'Accedi'}></Title>
                    <Form inputs={inputs} updateInputValue={setFormValue} />
                    <Button
                        disabled={loading || !formData.valid}
                        name={'ACCEDI'}
                        submit={submitLogin}
                    />
                    <Text>Hai dimenticato la password?</Text>
                    <Text>Non sei iscritto?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                        <Text style={styles.registrationText}>Registrati!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    loginSpace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    registrationText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    errorContainer: {
        flex: 1,
        width: '95%',
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
    },
    correctContainer: {
        flex: 1,
        width: '95%',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
    },
    textError: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})