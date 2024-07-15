import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyButton = ({ buttonTitle, buttonColor }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(buttonTitle)}
            style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        width: 100,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // Bóng cho iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 }, // bóng phía trên
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Bóng cho Android
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MyButton;
