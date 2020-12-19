import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator, Text } from 'react-native';
import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import Title from '../components/Title'
import CardItem from '../components/CardItem'
import { useIsFocused } from "@react-navigation/native"

const CardsScreen = ({ navigation }) => {
  const { user, getCards, cards } = useContext(AuthContext)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      getCards()
    }
  }, [isFocused])

  if (cards < 1) {
    return (
      <>
      <ActivityIndicator size={150} color="blue" style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}} animating={false}/>
      <Text>Nessuna Carta Trovata!</Text>
      </>
    )
  } else {
    return (
      <>
      <ActivityIndicator size={150} color="blue" style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}/>
      <LoggedInHeader user={user} />
      <SafeAreaView style={styles.container}>

        <View style={styles.main}>
          <Title title={`Le mie Carte`} />
          {
            !cards
            ? <Text>Nessuna Carta Trovata!</Text>
            : null
          }
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
      </>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
}
})