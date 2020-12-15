import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Input from './Input'


export default function Form({ inputs, updateInputValue }) {
  return (
    <>
      {
        inputs.map(({ label, name, autoCapitalize, secureTextEntry }, index) => {
          return (
            <View key={index}>
              <Input
                label={label}
                onTextChange={(text) => updateInputValue(name, text)}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
              />
            </View>
          )
        })
      }

    </>
  )
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool
  })).isRequired,
  updateInputValue: PropTypes.func.isRequired
}