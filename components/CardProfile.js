import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'

import { EvilIcons } from '@expo/vector-icons';

import Button from '../components/Button'
import Spacer from '../components/Spacer'


const CardProfile = ({ navigation, route }) => {
	const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params;

	return (
		<>
			<ScrollView
			showsVerticalScrollIndicator={false}
			keyboardShouldPersistTaps="handled" >
				<View style={styles.mainContainer}>
					<TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
						<EvilIcons name="arrow-left" size={60} color="black" />
					</TouchableOpacity>
					<View style={styles.profileContainer}>
						<Text style={styles.title}>{name}</Text>

						<View style={{ padding: 10 }}>
							<Text style={styles.subTitle}>Code: {id}</Text>
							<Text style={styles.subTitle}>Year: {created_at.slice(0, 4)}</Text>
							<Text style={styles.subTitle}>Game: {game}</Text>
							<Text style={styles.description}>{description.slice(1, -1)}</Text>
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
	img: {
		width: 100,
		height: 100,
		//backgroundColor: 'black',
		alignSelf: 'center',
		marginTop: 15,
		// borderWidth: 1,
		// borderColor: 'red',
	},
	logoGame: {
		width: 95,
		height: 95,
		justifyContent: 'center',
		alignItems: 'center'
	}
})