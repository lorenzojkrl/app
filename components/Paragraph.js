import React from 'react'
import { View, Text } from 'react-native'
export default function Paragraph({
    children,
    align

}) {
    return (
        <View style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 15,
                lineHeight: 25,
                fontWeight: '500',
                textAlign: align,
            }}>
                {children}

            </Text>
        </View>
    )
}