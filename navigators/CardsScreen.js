import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
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
      <ActivityIndicator size={150} color="red" />
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