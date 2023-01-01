import React, { Component } from 'react'
import { View, StyleSheet, Text, Pressable,  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



export default function FavoritesScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const routeName = route.name;

    const onPress = () => {
        navigation.navigate('Restaurants', {
          screen: 'RestaurantInfoScreen',
          params: { itemId: 10, previous_screen: routeName },
        });
    }
    const openDrawer =() => {
        navigation.openDrawer();
    }
    return (   
        <View style={styles.container}>
            <Text>Favorites Screen</Text>
            <Pressable onPress={onPress}>
                <Text>Go To Restaurant Info</Text>
            </Pressable>
            <Pressable onPress={openDrawer}>
                <Text>OPEN DRAWER</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});