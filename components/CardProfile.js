import React, { useContext } from "react"

import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { AuthContext } from '../context/AuthContext'

import Header from '../components/Header'
import Title from '../components/Title'
import Button from './Button'
import Spacer from './Spacer'
import LoggedInHeader from './LoggedInHeader'


import { EvilIcons } from '@expo/vector-icons';

const CardProfile = ({ navigation, route }) => {
	const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params;
	const { user } = useContext(AuthContext)

	return (
		<>
			<ScrollView>
				<LoggedInHeader user={user} />

				<View style={styles.mainContainer}>
					<TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
						<EvilIcons name="arrow-left" size={60} color="black" />
					</TouchableOpacity>

					<View style={styles.profileContainer}>

						<Text style={styles.title}>{name}</Text>
						<View style={{ padding: 10 }}>
							<View style={styles.imgContainer}>
								{/* <Image
									style={styles.logoGame}
									source={(game === "minecraft")
										? require('../assets/logo_minecraft.png')
										: (game === "pokemon")
											? require('../assets/logo_pokemon.png')
											: (game === "supermario")
												? require('../assets/logo_supermario.jpeg')
												: require('../assets/Guybrush_Threepwood.png')} /> */}

							</View>
							<Text style={styles.subTitle}>Code: {id}</Text>
							<Text style={styles.subTitle}>Year: {created_at.slice(0, 4)}</Text>
							<Text style={styles.subTitle}>Game: {game}</Text>
							<Text style={styles.description}>{description.slice(1, -1)}</Text>



						</View>
						<View style={{ alignSelf: 'center' }}>
							<Button name={'TRASFERISCI'} submit={() => navigation.navigate('ExchangeScreen', route)} ></Button>
						</View>

					</View>

				</View>
				<Spacer size={10} />

			</ScrollView>
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
		/* 		borderWidth: 1,
				borderColor: 'red', */
	},
	profileContainer: {
		flex: 1,
		width: '80%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		borderRadius: 10,
		overflow: 'hidden',
		/* 		borderWidth: 1,
				borderColor: 'red' */
	},
	title: {
		width: '100%',
		padding: 10,
		fontSize: 24,
		color: 'white',
		backgroundColor: 'orange',
	},
	subTitle: {
		fontSize: 15,
	},
	description: {
		marginTop: 10,
		fontSize: 20
	},
	imgContainer: {
		width: 100,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		alignSelf: 'center',
		marginTop: 15,
		// borderWidth: 1,
		// borderColor: 'red',
	},
	logoGame: {
		resizeMode: 'cover',

	}
})