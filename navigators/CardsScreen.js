import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import Title from '../components/Title'
import Button from '../components/Button'
import CardItem from '../components/CardItem'
import { useIsFocused } from "@react-navigation/native"


const CardsScreen = ({ navigation }) => {
  const { user, getCards, cards } = useContext(AuthContext)
  const isFocused = useIsFocused()
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    if (isFocused) {
      getCards()
    }
  }, [isFocused])

  if (cards < 1) {
    setTimeout(() => { setTimer(true) }, 3000)

    if (!timer) {
      return (
        <>
          <ActivityIndicator size={150} color="blue" style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} />
        </>
      )
    } else {
      return (
        <>
          <LoggedInHeader user={user} />
          <View style={styles.main}>
            <Title title={`NON CI SONO CARTE`} />
            <Button
              name={'TORNA ALLA SCHERMATA PRINCIPALE'}
              submit={() => navigation.navigate('Main')
              }
            />
          </View>
        </>
      )
    }



  } else {
    return (
      <>

        <LoggedInHeader user={user} />
        <SafeAreaView style={styles.container}>

          <View style={styles.main}>
            <Title title={`Le mie Carte`} />
            <FlatList
              style={{
                width: '100%'
              }}
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
    width: '100%',
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
})