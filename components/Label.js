import React from 'react'
import { Text } from 'react-native'
export default function Label({
    label,

}) {
    return <Text style={{
        fontSize: 16,
        textTransform: 'capitalize'
    }}>
        {label}
    </Text>
}