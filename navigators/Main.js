import React, { useState } from "react"
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import Spacer from '../components/Spacer'
import Button from '../components/Button'
import api from '../utility/api'
import NavigationTab from '../components/NavigationTab'




// usare createBottommTabNavigator: https://reactnavigation.org/docs/bottom-tab-navigator/
export default function Main() {
    const [cards, setCards] = useState([])

    const submitGet = async () => {
        try {
            const response = await api.get('get-cards')
            const { result, errors, payload } = response
            // console.log(result)
            if (result) {
                setCards(payload)
            } else {
                setError(errors[0].message)
                setMessageOpen(true)
            }
        } catch (err) {
            console.warn(err)
            setError(err)
            setMessageOpen(true)
        }

        console.log(cards)
    }
    return (
        <View >
            <Header>
                <Text>Nome Main  </Text>
                <Text>Nome</Text>

            </Header>
            <Spacer size={30} />
            <Button
                name={'CARTE'}
                submit={() => submitGet()}
            />
           
                <NavigationTab />
            



        </View>
    )
}