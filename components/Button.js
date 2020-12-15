import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function Button(props) {

    const textStyle = {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }

    const btnStyle = {
        width: '50%',
        borderColor: 'orange',
        backgroundColor: 'orange',
        borderWidth: 3,
        borderRadius: 50,
        padding: 10,
        marginVertical: 20,

    }


    return (
        <TouchableOpacity style={btnStyle} onPress={props.submit}>
            <Text style={textStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}

