import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ children }) {
    const { token } = useContext(AuthContext)

    return (<>


        {
            !token
                ?
                <View style={withoutToken}>
                    <Text
                        style={{
                            color: 'orange',
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>
                        CARDS
                    </Text>
                    
                </View>
                :
                <View style={withToken}>
                    <Text
                        style={{
                            color: 'orange',
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>
                        CARDS
                    </Text>
                    <View>
                        {children}
                    </View>
                </View>
        }

    </>

    )

}
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: 75,
        paddingBottom: 5,

        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    center: {
        justifyContent: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    }
})

const withToken = StyleSheet.compose(styles.headerContainer, styles.spaceBetween);
const withoutToken = StyleSheet.compose(styles.headerContainer, styles.center);