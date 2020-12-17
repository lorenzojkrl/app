import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
// import { rootNavigation } from '../utility/navigation.js'

const CardItem = ({ data }) => {
    const { description, game, id, name } = data;

    
    return (
        <View style={styles.card}>
            <View style={styles.img}>
            <Image
                    style={styles.logoGame}
                    source={(game === "minecraft") 
                            ? require('../assets/logo_minecraft.png') 
                            : (game === "pokemon") 
                            ? require('../assets/logo_pokemon.png') 
                            : (game === "supermario") ? require('../assets/logo_supermario.jpeg') 
                            : null} />
            </View>
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
        borderColor: 'black' ,
        borderRadius: 10,
        borderWidth: 1,
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
    },
    logoGame:{
		width: 95,
        height: 95,
        justifyContent: 'center',
        alignItems: 'center'
	}
})

/*
<Image 
                    style={{ 
                        width: 95,
                        height: 95,
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    source={{
                       
                    }}/>
*/