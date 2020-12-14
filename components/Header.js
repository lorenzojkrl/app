import React from 'react'
import { View, Text } from 'react-native'
export default function Header({ children }) {
    return (
        <View style={{

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            width: '100%',
            height: 100,
        }}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 35,
                    fontWeight: '900',
                }}>{children}</Text>

        </View>
    )

}