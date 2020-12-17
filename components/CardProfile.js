import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Title from '../components/Title'
import Button from '../components/Button'
import { EvilIcons } from '@expo/vector-icons';

const CardProfile = ({ navigation, route }) => {
    const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params;
    return (
        <>
            <Header><Text>Nome App</Text></Header>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <EvilIcons name="arrow-left" size={60} color="black" />
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <Title title={name} color='#666'></Title>
                    <Text style={styles.subTitle}>Code: {id}</Text>
                    <Text style={styles.subTitle}>Year: {created_at.slice(0, 4)}</Text>
                    <Text style={styles.subTitle}>Game: {game}</Text>
                    <Text style={styles.description}>{description.slice(1, -1)}</Text>
                    <View style={styles.img}></View>
                    <Text>{console.log(name)}</Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>

                        <Button name={'TRASFERISCI'} submit={() => navigation.navigate('ExchangeScreen', route)}></Button>
                    </TouchableOpacity>

                </View>

            </View>

        </>
    );
};

export default CardProfile;


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
        // borderWidth: 1,
        // borderColor: 'red',
    },
    profileContainer: {
        flex: 1,
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    subTitle: {
        fontSize: 15,
        color: '#666'
    },
    description: {
        marginTop: 10,
        fontSize: 20,
        color: '#666'
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 15,
        // borderWidth: 1,
        // borderColor: 'red',
    },
})