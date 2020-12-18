import React from "react";
import { Text } from 'react-native';

const Title = ({ title, color = '#000' }) => {

    const styles = {
        titleStyle: {
            color: color,
            fontSize: 24,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: 10,
            textAlign: 'center'
        }
    }

    return (
        <Text style={styles.titleStyle}>{title}</Text>
    );
};


export default Title;