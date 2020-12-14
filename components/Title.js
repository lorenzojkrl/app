import React from "react";
import { StyleSheet, Text } from 'react-native';

const Title = ({ title }) => {
    return (
        <Text style={styles.centerTitle}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    centerTitle: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    login: {
        flex: 1,
        alignItems: 'center',
    }
})

export default Title;