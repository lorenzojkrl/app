import React from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native'
export default function Input(){
    const [value, setValue] = useState("")

    return (
        <View style={styles.textArea}>

            <TextInput
                onChangeText={text => setValue(text)}
                value={value} />
        </View>
    )
}
