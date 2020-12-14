import React from 'react'
import { Text } from 'react-native'
export default function Label({ 
    title,

}) {
    return <Text style={{

        fontSize: 16,
        textTransform: 'capitalize'

    }}>
        {title}
    </Text>
}