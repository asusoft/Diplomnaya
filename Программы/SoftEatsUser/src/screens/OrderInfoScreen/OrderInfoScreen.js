import React, { Component } from 'react'
import { View, StyleSheet, Text,  } from 'react-native';

export default function OrderInfoScreen() {
    return (   
        <View style={styles.container}>
            <Text>Order Info Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});