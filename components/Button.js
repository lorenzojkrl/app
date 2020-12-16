import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function Button(props) {
<<<<<<< HEAD
    
=======
>>>>>>> f9066f61e4217238395ffa44694c2a3be838c576
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
        <TouchableOpacity style={btnStyle} onPress={props.submit} disabled={props.disabled}>
            <Text style={textStyle}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}