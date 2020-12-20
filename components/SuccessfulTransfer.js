g
import { Text, View, ScrollView, StyleSheet } from 'react-native';

g
import { AntDesign } from '@expo/vector-icons';

import Header from '../components/Header'
import Button from '../components/Button'
import Spacer from '../components/Spacer'


const SuccessfulTransfer = ({ navigation }) => {
    const { user } = useContext(AuthContext)
    return (
        <ScrollView>
            <View style={styles.main}>

                <Header user={user.name} />
                <Spacer size="20" />
                <Text style={styles.text}>
                    Trasferimento avvenuto con successo
                </Text>

                <View style={styles.check}>
                    <AntDesign name="checkcircleo" size={100} color="#28B463" />
                </View>

                <Button
                    name={'TORNA ALLA LISTA'}
                    submit={() => navigation.navigate('CardsScreen')}
                />

            </View>
        </ScrollView>

    );
};
export default SuccessfulTransfer;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        color: '#666',
    },
    check: {
        width: 200,
        height: 200,
        borderRadius: 20,
        borderColor: '#999',
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 25,

        justifyContent: 'center',
        alignItems: 'center',
    }
})