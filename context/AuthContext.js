import React, { createContext, useCallback, useState } from 'react'
import { setToken } from '../utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [token, setTokenProv] = useState()
    const [counter, setCounter] = useState('0')
    const [cards, setCards] = useState([])

    const manageUserData = useCallback(async (userData) => {
        console.log('userData in manageuserData', userData)
        setUser(userData.user)
        setToken(userData.token)
        setTokenProv(userData.token)
        await AsyncStorage.setItem('AuthToken', userData.token)
    }, [])

    const manageCards = useCallback(async (cards) => {
        // console.log('cards', JSON.stringify(cards))
        try {
            const jsonValue = JSON.stringify(cards)
            setCards(jsonValue)
            await AsyncStorage.setItem('cards', jsonValue)
        } catch (e) {
            console.log(e)
        }

    }, [])

    const transferCounter = useCallback(async (cardsMoved) => {
        console.log('cardsMoved in COntext: ', cardsMoved)
        setCounter(cardsMoved)

        await AsyncStorage.setItem('counter', counter)
    }, [])

    const onLogout = useCallback(async () => {
        setUser(null)
        setToken('')
        setTokenProv('')
        await AsyncStorage.removeItem('AuthToken') // cancello token dalla memoria

        // cancello la storia di navigazione e vado sulla schermata di autenticazione
        rootNavigation.current.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: "AuthNavigator" }]
        }))
    }, [])

    return (
        <AuthContext.Provider value={{
            token, setTokenProv,
            user, manageUserData,
            onLogout,
            transferCounter, counter,
            manageCards, cards
        }}>
            {children}
        </AuthContext.Provider>
    )
}