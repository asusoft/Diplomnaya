import React, { Component } from 'react'
import { View, StyleSheet, Text,  } from 'react-native';

export default function OrdersScreen() {
    return (   
        <View style={styles.container}>
            <Text>Orders Screen</Text>
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