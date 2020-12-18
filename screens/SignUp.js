import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Title from '../components/Title'
import Header from '../components/Header'
import Row from '../components/Row'
import Button from '../components/Button'
import Spacer from '../components/Spacer'

import Form from '../components/Form'
import useForm from '../hooks/useForm'
import api from '../utility/api'
import { AuthContext } from '../context/AuthContext'
import { rootNavigation } from '../utility/navigation.js'


const inputs = [
    { label: 'Name', name: 'name' },
    { label: 'Surname', name: 'surname' },
    { label: 'Email', name: 'email' },
    { label: 'Username', name: 'username' },
    { label: 'Password', name: 'password', secureTextEntry: true },
    { label: 'Ripeti Password', name: 'password_confirmation', secureTextEntry: true },
]


export default function SignUp() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [loading, setLoading] = useState(false)
    const requiredInputs = ['name', 'surname', 'email', 'username', 'password', 'password_confirmation']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [error, setError] = useState(false)
    const [messageOpen, setMessageOpen] = useState(false)
    const { manageUserData } = useContext(AuthContext)


    const submitSignup = async () => {
        try {
            setLoading(true)
            const response = await api.post('authentication/signup-action', formData.values)
            const { result, errors, payload } = response
            console.log(response)

            if (result) {
                manageUserData(payload)
                rootNavigation.current.navigate('Main')
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
        <ScrollView>
            <View style={styles.loginSpace}>
                <Header><Text>Nome App</Text></Header>
                <Spacer size={10} />
                <Alert open={messageOpen} message={error} onClose={() => setMessageOpen()} typology={error ? 'danger' : 'success'} />
                <Title title={'Registrati'}></Title>
                <Form inputs={inputs} updateInputValue={setFormValue} />
                <Row>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Ho letto e accetto la normativa della Privacy</Text>
                </Row>
                <Button
                    name={'ISCRIVITI'}
                    disabled={loading || !formData.valid}
                    // disabled={true}
                    submit={submitSignup}
                />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#eaeaea"
    },
    loginSpace: {
        flex: 1,
        alignItems: 'center',
    }
})