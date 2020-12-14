import React from 'react'
import { Text } from 'react-native'
export default function Label({
    label,

}) {
    return <Text style={{
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'capitalize'
    }}>
        {label}
    </Text>
}