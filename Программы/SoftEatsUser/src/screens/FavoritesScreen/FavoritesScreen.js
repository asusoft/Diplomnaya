import React, { Component, useEffect } from 'react'
import { View, StyleSheet, Text, Pressable,  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated from "react-native-reanimated";
import { useDrawerStatus } from '@react-navigation/drawer'
import { useDrawerProgress } from '@react-navigation/drawer';



export default function FavoritesScreen() {

    //const progress = useDrawerProgress();
    const drawerStatus = useDrawerStatus();
    const [drawerIsOpen, setDrawerIsOpen] = React.useState();
    
    

    const [progress, setProgress] = React.useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{scale}]}

    useEffect(() => {
       drawerStatus === 'open' ? setDrawerIsOpen(true) : setDrawerIsOpen(false);
    }, [])

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
        <Animated.View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "white",
                ...animatedStyle,
            }}
        >
            <Text>Favorites Screen</Text>
            <Pressable onPress={onPress}>
                <Text>Go To Restaurant Info</Text>
            </Pressable>
            <Pressable onPress={openDrawer}>
                <Text>OPEN  DRAWER</Text>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
});