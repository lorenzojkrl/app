import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import Title from '../components/Title'
import api from '../utility/api'
// import { EvilIcons } from '@expo/vector-icons';
import CardItem from '../components/CardItem'

const CardsScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  // TO refactor, duplicate from Main, same with setError, setMessageOpen, api
  const submitGet = async () => {
    try {
      const response = await api.get('get-cards')
      const { result, errors, payload } = response
      // console.log(result)
      if (result) {
        console.log('payload--------------------', payload.cards)
        setCards(payload.cards)
      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }
    } catch (err) {
      console.warn(err)
      setError(err)
      setMessageOpen(true)
    }
    // console.log('user from AuthCont ------------------------------------', user.name)
    // console.log('cards ------------------------------------', cards)
  }

  useEffect(() => {
    submitGet()
  }, []);

  if (cards < 1) {
    return (
      <ActivityIndicator size={150} color="blue" style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}/>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <LoggedInHeader user={user} />

        <View style={styles.main}>
          <Title title={`Le mie Carte`} />
          <FlatList
            data={cards}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CardProfile', item)}
              >
                <CardItem data={item} />
              </TouchableOpacity>

            )}
            keyExtractor={item => JSON.stringify(item.id)}
          />
        </View>
      </SafeAreaView>
    );
  }

};

export default CardsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  main: {
    flex: 1,
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
})