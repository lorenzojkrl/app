import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import api from '../utility/api'

import LoggedInHeader from '../components/LoggedInHeader'
import { AuthContext } from '../context/AuthContext'
import { EvilIcons } from '@expo/vector-icons';
import Title from '../components/Title'
import Button from '../components/Button'
import { ScrollView } from 'react-native-gesture-handler';



const CardsScreen = () => {
  const { user } = useContext(AuthContext)
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const generateCode = async () => {
    try {
      const response = await api.post('refresh-portfolio-code',)
      const { result, errors, payload } = response
      // console.log('result is: ', payload)
      if (result) {
        setCode(payload)
      }
      else {
        setError(errors[0].message)
        setMessageOpen(true)
      }
    } catch (err) {
      console.warn(err)
      setError(err)
      setMessageOpen(true)
    }

  }
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <LoggedInHeader user={user} />
        <Title title={`${user.name + ' ' + user.surname} `} />
        < EvilIcons name="user" size={150} color="black" />
        <Text style={styles.paragraph}>Email: {user.email}</Text>
        <Button
          name={'GENERA CODICE'}
          submit={generateCode}
        />
        {
          code
            ? <>
              <Text style={styles.paragraph}>Codice: {code.portfolio_code}</Text>
              <Title title={`Il tuo QR Code`} />
              <View style={styles.qrCodeContainer}>
                <QRCode
                  logo={require('../assets/Guybrush_Threepwood.png')}
                  logoSize={70}
                  content={code.portfolio_code}
                  size={240}
                />
              </View>
            </>
            : <Text></Text>
        }
      </View>
    </ScrollView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  qrCodeContainer: {
    width: 240,
    height: 240,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  paragraph: {
    fontSize: 20
  }
})