import React from "react";
import { StyleSheet, Text } from 'react-native';

const Title = ({ title }) => {
    return (
        <Text style={styles.titleStyle}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 30,
    }
})

export default Title;