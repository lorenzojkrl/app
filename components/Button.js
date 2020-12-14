import React from 'react'
import { Pressable, Text } from 'react-native'
import colors from '../config/colors'


export default function Button({ title, ...props }) {

    const cleanedProps = Object.assign({}, props, {
        style: [{

            backgroundColor: colors.yellow,
            height: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            justifyContent: 'center'

        }, props.style]
    })

    return (
        <Pressable>
            <Text style={{ color: colors.white, textAlign: 'center' }}>
                {title}
            </Text>
        </Pressable>
    )
}