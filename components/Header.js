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
            height: 70,
            
        }}>
            <Text
                style={{
                    color: 'orange',
                    fontSize: 30,
                    fontWeight: 'bold',
                }}>{children}</Text>

        </View>
    )

}