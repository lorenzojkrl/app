import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { EvilIcons } from '@expo/vector-icons';
import api from '../utility/api'
import { AuthContext } from '../context/AuthContext'
import Header from '../components/Header'
import Title from '../components/Title'
import Button from '../components/Button'


const ExchangeScreen = ({ navigation, route }) => {
    const { created_at, description, game, id, name, updatet_at, user_uuid } = route.params.params;
    const [qrAvailable, setQRAvailable] = useState(true)
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState(''); // qrData = portfolio code
    const [error, setError] = useState(false)
    const [messageOpen, setMessageOpen] = useState(false)
    const { transferCounter, counter } = useContext(AuthContext)

    //Costanti per la dimensione del BarCodeScanner
    const myScreenW = Dimensions.get('window').width;
    const myScreenH = myScreenW / 9 * 16;

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        // console.log('route.params.params: ', route.params.params)

    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setQrData(data);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const transferCard = async () => {
        const cardData = {
            "card_id": id,
            "portfolio_code": qrData
        }
        console.log('cardData: ', cardData)

        try {
            const response = await api.post('move-card', cardData)
            const { result, errors, payload } = response
            // console.log('response:', response)
            console.log('result -----------', response)

            if (result) {
                let newCounter = parseInt(counter)
                newCounter++
                transferCounter(JSON.stringify(newCounter))
                navigation.navigate('SuccessfulTransfer')

            } else {
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
        <ScrollView>
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
                                {
                                    !scanned
                                        ? <>
                                            <Title
                                                title={'Inquadra il QR Code'}
                                                color='#666'
                                                style={{ alignSelf: 'center' }}
                                            />

                                            <View style={styles.img}>
                                                <BarCodeScanner
                                                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                                                    style={{ height: myScreenH, width: myScreenW }}
                                                />
                                            </View>
                                        </>
                                        : <>
                                            <Title
                                                title={'Tap to Scan Again'}
                                                color='#666'
                                                style={{ alignSelf: 'center' }}
                                            />

                                            <TouchableOpacity
                                                style={styles.img}
                                                onPress={() => setScanned(false)}
                                            >
                                                <QRCode
                                                    content={qrData}
                                                    size={240}
                                                />
                                            </TouchableOpacity>
                                            {/*scanned && <Button name={'Tap to Scan Again'} submit={() => setScanned(false)} />*/}

                                        </>
                                }
                                {/* TO be changed with !qrCode*/}
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
                                    onChangeText={qrData => setQrData(qrData)}
                                    value={qrData}
                                />

                                <TouchableOpacity onPress={() => setQRAvailable(true)}>
                                    <Text style={styles.isQRAvailable}>Voglio usare il QR Code</Text>
                                </TouchableOpacity>
                            </>
                    }

                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Button
                            name={'TRASFERISCI'}
                            // submit={() => navigation.navigate('SuccessfulTransfer')}
                            submit={() => transferCard()}
                        // submit={() => console.log(qrData)}
                        />
                    </TouchableOpacity>
                </View>
                {console.log(route)}
            </View>

        </ScrollView>
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
        backgroundColor: 'orange',
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
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