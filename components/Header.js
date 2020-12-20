import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { View, Text, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

import Spacer from '../components/Spacer'


export default function Header({ user }) {
    const { token } = useContext(AuthContext)

    return (<>

        {
            !token
                ?
                <View style={withoutToken}>
                    <Text style={styles.logoText}>
                        CARDS
                    </Text>

                </View>
                :
                <View style={withToken}>
                    <Text style={styles.logoText}>
                        CARDS
                    </Text>
                    <View style={styles.childrenView}>
                        <Text style={styles.userText} >
                            {user}
                        </Text>
                        <EvilIcons name="user" size={50} color="yellow" />
                    </View>
                </View>
        }
    </>)
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: 80,
        paddingBottom: 5,
        marginBottom: 20,

        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    center: {
        justifyContent: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 5,
    },
    logoText: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
    },
    childrenView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userText: {
        color: 'orange',
        fontSize: 16,
        paddingRight:7,
    },


})

const withToken = StyleSheet.compose(styles.headerContainer, styles.spaceBetween);
const withoutToken = StyleSheet.compose(styles.headerContainer, styles.center);