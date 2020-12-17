import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Header from '../components/Header'
import Title from '../components/Title'
import Button from '../components/Button'
import { EvilIcons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ExchangeScreen = ({ navigation, route }) => {
  // const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params;
  const [qrAvailable, setQRAvailable] = useState(true)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Header><Text >Nome App</Text></Header>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
          <EvilIcons name="arrow-left" size={60} color="black" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          {/* Use ternaru to have only one block */}
          {
            qrAvailable
              ? <>
                <Title
                  title={'Inquadra il QR Code'}
                  color='#666'
                  style={{ alignSelf: 'center' }}
                />
                <View style={styles.img}>
                  <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                  />
                  {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </View>

                <TouchableOpacity onPress={() => setQRAvailable(false)}>
                  <Text style={styles.isQRAvailable}>Non ho un QR Code</Text>
                </TouchableOpacity>
              </>
              : <>
                <Title
                  title={'Inserisci il codice univoco del destinatario'}
                  color='#666'
                  style={{ alignSelf: 'center', textAlign: 'center' }} />
                <TextInput
                  style={styles.input}
                  placeholder={'Inserisci il codice qui'}
                // onChangeText={text => onChangeText(text)}
                // value={value}
                />

                <TouchableOpacity onPress={() => setQRAvailable(true)}>
                  <Text style={styles.isQRAvailable}>Voglio usare il QR Code</Text>
                </TouchableOpacity>
              </>
          }


          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Button
              name={'TRASFERISCI'}
              submit={() => navigation.navigate('SuccessfulTransfer')}
            />
          </TouchableOpacity>
        </View>
        {console.log(route)}
      </View>

    </>
  );
};

export default ExchangeScreen;

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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  profileContainer: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  img: {
    width: 250,
    height: 250,
    backgroundColor: 'grey',
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  isQRAvailable: {
    textDecorationLine: 'underline',
    marginTop: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
})