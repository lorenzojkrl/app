import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import Title from '../components/Title'


const CardsScreen = () => {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.main}>
      <LoggedInHeader user={user} />
      <Title title={`Il tuo QR Code`} />
      <FlatList
        keyExtractor={(item) => JSON.stringify(item.id)}
        data={userData}
        renderItem={({ item }) => (<UserCard data={item} />)}
      />
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },

})