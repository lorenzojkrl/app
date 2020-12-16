import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Title from '../components/Title'
import Header from '../components/Header'
import Row from '../components/Row'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Form from '../components/Form'
import useForm from '../hooks/useForm'

const inputs = [
    { label: 'Email', name: 'username_email' },
    { label: 'Username', name: 'username' },
    { label: 'Password', name: 'password', secureTextEntry: true },
    { label: 'Ripeti Password', name: 'ripeti_password', secureTextEntry: true },
]

export default function SignUp() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [loading, setLoading] = useState(false)
    const requiredInputs = ['username_email', 'username', 'password', 'ripeti_password']
    const [formData, setFormValue] = useForm(requiredInputs)


    const submitSignup = async () => {
        console.log('TO be concluded')
        // review for signup
        // try {
        //     setLoading(true)
        //     const response = await api.post('authentication/login-action', formData.values)
        //     const { result, errors, payload } = response
        //     if (result) {
        //         manageUserData(payload)
        //         rootNavigation.current.navigate('Main')
        //     } else {
        //         setError(errors[0].message)
        //         setMessageOpen(true)
        //     }
        // } catch (err) {
        //     console.warn(err)
        //     setError(err)
        //     setMessageOpen(true)

        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <ScrollView>
            <View style={styles.loginSpace}>
                <Header><Text>Nome App</Text></Header>
                <Spacer size={10} />
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