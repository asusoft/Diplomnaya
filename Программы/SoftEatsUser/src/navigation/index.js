import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, useDrawerProgress } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ResturantInfoScreen from "../screens/RestaurantInfo/RestaurantInfoScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
import DishInfoScreen from "../screens/DishInfoScreen/DishInfoScreen";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import OrderInfoScreen from "../screens/OrderInfoScreen/OrderInfoScreen";
import OrderTrackingScreen from "../screens/OrderTrackingScreen/OrderTrackingScreen";
import { View, StyleSheet } from "react-native";

import Animated, { ColorSpace } from "react-native-reanimated";

import DrawerView from './DrawerView';
import COLORS from '../../assets/constants/colors';
import CustomDrawerContent from './CustomDrawerContent'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
            />
        </Stack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const HomeTabs = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFA500"
        }}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerType="slide"
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        width: 250,
                        backgroundColor: COLORS.primary
                    },
                    overlayColor: "transparent",
                    drawerLabelStyle: {
                        fontWeight: "bold"
                    },
                    drawerActiveTintColor: COLORS.white,
                    drawerInactiveTintColor: COLORS.grey,
                    activeBackgroundColor: 'white',
                    drawerItemStyle: { backgroundColor: null },
                    swipeEnabled: true,
                    sceneContainerStyle: {
                        backgroundColor: COLORS.primary,
                    }
                }}
                drawerContent={props => {
                    return <CustomDrawerContent {...props} />;
                }}
            >
                <Drawer.Screen
                    name="Home">
                    {props => (
                        <DrawerView styler={styles.container}>
                            <HomeScreen {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="Restaurants"
                    component={RestaurantStackNavigator}
                    options={{
                        drawerItemStyle: { display: 'none' }
                    }}
                />

                <Drawer.Screen
                    name="Orders"
                >
                    {props => (
                        <DrawerView styler={styles.container}>
                            <OrdersStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="Profile"
                >
                    {props => (
                        <DrawerView styler={styles.container}>
                            <ProfileStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="Cart"
                >
                    {props => (
                        <DrawerView styler={styles.container}>
                            <CartStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="Favourites"
                >
                    {props => (
                        <DrawerView styler={styles.container}>
                            <FavoritesScreen {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};


const RestaurantStack = createNativeStackNavigator();

const RestaurantStackNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="RestaurantInfoScreen"
        >
            <RestaurantStack.Screen
                name="RestaurantInfoScreen"
                component={ResturantInfoScreen}
            />

            <RestaurantStack.Screen
                name="DishInfoScreen"
                component={DishInfoScreen}
            />
        </RestaurantStack.Navigator>
    );
};


const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <OrdersStack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
            />

            <OrdersStack.Screen
                name="OrderInfoScreen"
                component={OrderInfoScreen}
            />

            <OrdersStack.Screen
                name="OrderTrackingScreen"
                component={OrderTrackingScreen}
            />
        </OrdersStack.Navigator>
    );
};


const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </ProfileStack.Navigator>
    );
};


const CartStack = createNativeStackNavigator();

const CartStackNavigator = () => {
    return (
        <CartStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <CartStack.Screen
                name="CartScreen"
                component={CartScreen}
            />
            <CartStack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
            />
        </CartStack.Navigator>
    );
};


export default RootNavigator;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
}); 
