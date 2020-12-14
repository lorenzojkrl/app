import React from "react";
import { StyleSheet, Text } from 'react-native';

const Title = ({ title }) => {
    return (
        <Text style={styles.titleStyle}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        flex: 1,
        color: 'black',
        fontSize: 24,
        textTransform: 'uppercase'
    }
})

export default Title;