import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Title from '../components/Title'
import Header from '../components/Header'
import Spacer from '../components/Spacer'
<<<<<<< HEAD
import NavigationTab from '../components/NavigationTab'
=======
>>>>>>> f9066f61e4217238395ffa44694c2a3be838c576
import Button from '../components/Button'

import { AuthContext } from '../context/AuthContext'
import { rootNavigation } from '../utility/navigation.js'
import api from '../utility/api'

import useForm from '../hooks/useForm'
import Form from '../components/Form'

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
            <View style={styles.loginSpace}>
                <Header><Text>Nome App</Text></Header>
                <Spacer size={30} />

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
                
                    <NavigationTab />
                
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    loginSpace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registrationText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
})