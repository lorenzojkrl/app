import React from "react";
import { TextInput } from 'react-native'
export default function Input({
    value,
    setValue,
    type, //'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password'
    placeholder,
}){

    return (
            <TextInput
                onChangeText={text => setValue(text)}
                value={value} 
                keyboardType={type}
                placeholder={placeholder}
            />
    )
}
