import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import CardsScreen from './CardsScreen'
import CardProfile from '../components/CardProfile'
import ExchangeScreen from '../components/ExchangeScreen'
import SuccessfulTransfer from '../components/SuccessfulTransfer'

const CardsStack = createStackNavigator()

const CardsStackNav = () => {


    return (
        <>
        <CardsStack.Navigator
            initialRouteName={"CardsScreen"}
            screenOptions={{
                headerShown: false,
                cardStyle: { paddingTop: 0 },
            }}
        >
            <CardsStack.Screen name="CardsScreen" component={CardsScreen} />
            <CardsStack.Screen name="CardProfile" component={CardProfile} />
            <CardsStack.Screen name="ExchangeScreen" component={ExchangeScreen} />
            <CardsStack.Screen name="SuccessfulTransfer" component={SuccessfulTransfer} />
        </CardsStack.Navigator>
        </>
    )
};

export default CardsStackNav;