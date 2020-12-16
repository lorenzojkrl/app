import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import Title from '../components/Title'
import api from '../utility/api'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const CardsScreen = () => {
  const { user } = useContext(AuthContext)
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <LoggedInHeader user={user} />
        <Title title={`Le mie Carte`} />
        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    width: 350
  },
  title: {
    fontSize: 32,
  },

})