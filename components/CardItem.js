import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
// import { rootNavigation } from '../utility/navigation.js'


const CardItem = ({ data }) => {
    const { description, game, id, name } = data;
    return (
        <View style={styles.card}>
            <View style={styles.img}></View>
            <View style={styles.text}>
                <Text>
                    Name: {name}
                </Text>
                <Text>
                    Game: {game}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <EvilIcons name="arrow-right" size={40} color="black" />
            </View>
        </View>
    )
};

export default CardItem;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderRadius: 2,
        backgroundColor: 'grey'
        // borderWidth: 2,
        // borderColor: 'blue',
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    text: {
        width: 200,
        height: 100,
        padding: 5,
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center'
    },
    btnContainer: {
        width: 50,
        height: 100,
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})