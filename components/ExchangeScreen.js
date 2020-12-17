import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Title from '../components/Title'
import Button from '../components/Button'
import { EvilIcons } from '@expo/vector-icons';

const ExchangeScreen = ({ navigation, route }) => {
    // const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params;

    return (
        <>
            <Header><Text>Nome App</Text></Header>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <EvilIcons name="arrow-left" size={60} color="black" />
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <Title title={'Inquadra il QR Code'}></Title>
                    <View style={styles.img}></View>

                    <TouchableOpacity>
                        <Text style={styles.noQR}>Non ho un QR Code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Button name={'TRASFERISCI'} submit={() => navigation.navigate('SuccessfulTransfer')}></Button>
                    </TouchableOpacity>
                </View>
                {console.log(route)}
            </View>

        </>
    );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    goBack: {
        height: 100,
        width: '85%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
    },
    profileContainer: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'red'
    },
    img: {
        width: 250,
        height: 250,
        backgroundColor: 'grey',
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    noQR: {
        textDecorationLine: 'underline',
    }
})