import React from 'react';
import { Text, View } from 'react-native'
import Header from '../components/Header'
import { EvilIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer'



const LoggedInHeader = ({ user }) => {
    return (
        <>
            <Header>
                <Text
                    style={{
                        color: 'orange',
                        fontSize: 16
                    }}>
                    {user.name}
                </Text>
                <View style={{
                }}>
                    <EvilIcons name="user" size={50} color="yellow" />

                </View>
            </Header>
            <Spacer size={5} />
        </>
    );
};

export default LoggedInHeader;