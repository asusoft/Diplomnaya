import "react-native-gesture-handler";
import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from "react-native";

const DrawerView = ({ children, styler }) => {
    const drawerProgress = useDrawerProgress();

    const viewStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            drawerProgress.value,
            [0, 1],
            [1, 0.8]
        )

        const borderRadius = interpolate(
            drawerProgress.value,
            [0, 1],
            [0, 40]
        );
        return {
            transform: [{ scale: scale }],
            borderRadius: borderRadius
        }

    })

    return (
        <Animated.View
            style={[
                styler,
                styles.container,
                viewStyle
            ]}
        >
            {children}
        </Animated.View>
    )
}

export default DrawerView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});