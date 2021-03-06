import React, { createContext, useCallback, useState } from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/native'

import api from '../utility/api'
import { setToken } from '../utility/api'
import { rootNavigation } from '../utility/navigation'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [token, setTokenProv] = useState()
    const [counter, setCounter] = useState()
    const [cards, setCards] = useState([])

    const [error, setError] = useState(false)
    const [messageOpen, setMessageOpen] = useState(false)

    const manageUserData = useCallback(async (userData) => {
        setUser(userData.user)
        setToken(userData.token)
        setTokenProv(userData.token)
        await AsyncStorage.setItem('AuthToken', userData.token)
    }, [])

    const getCards = useCallback(async () => {
        try {
            const response = await api.get('get-cards')
            const { result, errors, payload } = response

            if (result) {
                setCards(payload.cards)
            } else {
                setError(errors[0].message)
                setMessageOpen(true)
            }
        } catch (err) {
            console.warn(err)
            setError(err)
            setMessageOpen(true)
        }
    }, [])


    const transferCounter = useCallback(async (cardsMoved) => {

        setCounter(cardsMoved)

        // await AsyncStorage.setItem('counter', counter)
    }, [])

    const onLogout = useCallback(async () => {
        setUser('   ')
        setToken('')
        setTokenProv('')
        await AsyncStorage.removeItem('AuthToken') // cancello token dalla memoria

        // cancello la storia di navigazione e vado sulla schermata di autenticazione
        rootNavigation.current.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: "Auth" }]
        }))
    }, [])

    return (
        <AuthContext.Provider value={{
            token, setTokenProv,
            user, manageUserData,
            onLogout,
            transferCounter, counter,
            getCards, cards,
        }}>
            {children}
        </AuthContext.Provider>
    )
}