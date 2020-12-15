import React from "react";
import { TextInput } from 'react-native'


export default function Input({
    value,
    setValue,
    type, //'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password'
    isPassword,
    placeholder,
}) {
    return (
        <TextInput
            style={{
                width: '70%',
                borderColor: 'black',
                borderWidth: 3,
                borderRadius: 50,
                padding: 10,
                marginVertical: 15,
                backgroundColor: 'white'
            }}
            onChangeText={setValue}
            value={value}
            keyboardType={type}
            secureTextEntry={isPassword}
            placeholder={placeholder}
        />
    )
}
