import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet } from 'react-native'
import Label from './Label'


export default function Input({
  label,
  type, //'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password'
  isPassword,
  onTextChange = () => { },
  ...props
}) {
  const [text, setText] = useState('')

  useEffect(() => {
    onTextChange(text)
  }, [text])

  return (
    <View style={[styles.container]}>
      <Label label={label}></Label>
      <TextInput
        style={styles.textInputStyle}
        value={text}
        onChangeText={value => setText(value)}
        keyboardType={type}
        secureTextEntry={isPassword}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 20,
    width: 400,
    backgroundColor: 'pink'
  },
  textInputStyle: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    padding: 10,
    marginVertical: 15,
    backgroundColor: 'white'
  }
})
