import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext'

import CheckBox from '@react-native-community/checkbox';
import Title from '../components/Title'
import Row from '../components/Row'
import Button from '../components/Button'
import Spacer from '../components/Spacer'

import Form from '../components/Form'
import useForm from '../hooks/useForm'
import api from '../utility/api'


const inputs = [
    { label: 'Name', name: 'name' },
    { label: 'Surname', name: 'surname' },
    { label: 'Email', name: 'email' },
    { label: 'Username', name: 'username' },
    { label: 'Password', name: 'password', secureTextEntry: true },
    { label: 'Ripeti Password', name: 'password_confirmation', secureTextEntry: true },
]


export default function SignUp({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [loading, setLoading] = useState(false)
    const requiredInputs = ['name', 'surname', 'email', 'username', 'password', 'password_confirmation']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [error, setError] = useState(false)
    const [messageOpen, setMessageOpen] = useState(false)
    const { manageUserData } = useContext(AuthContext)


    const submitSignup = async () => {
        if (formData.valid) {
            try {
                setLoading(true)
                const response = await api.post('authentication/signup-action', formData.values)
                const { result, errors, payload } = response
              

                if (result) {
                    // manageUserData(payload)
                    // rootNavigation.current.navigate('Greeting')
                    navigation.navigate('Greeting')
                } else {
                    setError(errors[0].message)
                    console.log(errors);
                    setMessageOpen(true)
                }

                if(!toggleCheckBox){
                    setError(' Confermare di aver prevo visione della Normativa sulla Privacy')
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
        else {
            setError(' Sono stati lascita dei campi vuoti. Inserire tutti i dati per procedere')
            setMessageOpen(true)
        }



    }

    return (
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
                <Title title={'Registrati'}></Title>
                <Form inputs={inputs} updateInputValue={setFormValue} />
                <Row>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />

                    <Text>Ho letto e accetto la normativa della Privacy</Text>
                </Row>

                <TouchableOpacity>
                    <Button
                        name={'ISCRIVITI'}
                        disabled={loading}
                        // disabled={true}
                        submit={submitSignup}
                    />
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#eaeaea"
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
        flexDirection: 'column',
    },
    loginSpace: {
        flex: 1,
        alignItems: 'center',
    },
    textError: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})