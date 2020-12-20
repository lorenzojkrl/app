import React from 'react';
import { Text } from 'react-native'
import Header from '../components/Header'
import { EvilIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer'


const LoggedInHeader = ({ user }) => {
    return (
        <>
            <Header>
                <Text>{user.name}</Text>
                <EvilIcons name="user" size={50} color="yellow" />
            </Header>
            <Spacer size={5} />
        </>
    );
};

export default LoggedInHeader;