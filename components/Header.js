import React, { useContext } from 'react'

import { View, Text } from 'react-native'

export default function Header({ children }) {

    return (
        <View style={{

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            backgroundColor: 'black',
            width: '100%',
            height: 80,
            paddingTop: 20,
            paddingHorizontal: 10,
            paddingBottom:8,
        }}>
            <Text style={{
                color: 'orange',
                fontSize: 30,
                fontWeight: 'bold',

            }}>
                CARDS
                </Text>

            <View style={{

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

              

            }}>
                {children}
            </View>

        </View>
    )

}