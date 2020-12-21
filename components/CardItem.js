import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const CardItem = ({ data }) => {
    const { game, name } = data;
    return (

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 10, borderRadius: 10, overflow: 'hidden' }} >
            <View style={{ flexDirection: 'row' }} >
                <View style={styles.img}>
                    <Image
                        style={styles.logoGame}
                        source={(game === "minecraft")
                            ? require('../assets/logo_minecraft.png')
                            : (game === "pokemon")
                                ? require('../assets/logo_pokemon.png')
                                : (game === "supermario")
                                    ? require('../assets/logo_supermario.jpeg')
                                    : require('../assets/Guybrush_Threepwood.png')} />
                </View>
                <View style={styles.text}>
                    <Text>
                        Name: {name}
                    </Text>
                    <Text>
                        Game: {game}
                    </Text>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderRadius: 2,
        backgroundColor: 'white'

    },
    img: {
        width: 100,
        height: 100,
        borderColor: 'black',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        height: 100,
        padding: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    btnContainer: {

        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,

    },
    logoGame: {
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

