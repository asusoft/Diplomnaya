import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen 
                name="HomeTabs"
                component={HomeTabs}
            />
        </Stack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const HomeTabs = () => {
    return(
        <Drawer.Navigator
            initialRouteName="Home" 
            screenOptions={{ headerShown: false}}
        >
            <Drawer.Screen 
                name = "Home"
                component={HomeStackNavigator}
            />

            <Drawer.Screen 
                name = "Orders"
                component={OrdersStackNavigator}
            />

            <Drawer.Screen 
                name = "Profile"
                component={ProfileStackNavigator}
            />

            <Drawer.Screen 
                name = "Cart"
                component={CartStackNavigator}
            />

            <Drawer.Screen 
                name = "Favorites"
                component={FavoritesScreen}
            />
        </Drawer.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator
            screenOptions={{ headerShown: false}}
        >
            <HomeStack.Screen
                name = "HomeScreen"
                component={HomeScreen}
            />

            <HomeStack.Screen
                name = "RestaurantInfoScreen"
                component={RestaurantStackNavigator}
            />
        </HomeStack.Navigator>
    );
};

const RestaurantStack = createNativeStackNavigator();

const RestaurantStackNavigator = () => {
    return(
        <RestaurantStack.Navigator
            screenOptions={{ headerShown: false}}
        >
            <RestaurantStack.Screen
                name = "RestauranInfoScreen"
                component={ResturantInfoScreen}
            />

            <RestaurantStack.Screen
                name = "DishInfoScreen"
                component={DishInfoScreen}
            />
        </RestaurantStack.Navigator>
    );
};


const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return(
        <OrdersStack.Navigator
            screenOptions={{ headerShown: false}}
        >
            <OrdersStack.Screen
                name = "OrdersScreen"
                component={OrdersScreen}
            />

            <OrdersStack.Screen
                name = "OrderInfoScreen"
                component={OrderInfoScreen}
            />

            <OrdersStack.Screen
                name = "OrderTrackingScreen"
                component={OrderTrackingScreen}
            />
        </OrdersStack.Navigator>
    );
};


const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return(
        <ProfileStack.Navigator
            screenOptions={{ headerShown: false}}
        >
            <ProfileStack.Screen
                name = "ProfileScreen"
                component={ProfileScreen}
            />
        </ProfileStack.Navigator>
    );
};


const CartStack = createNativeStackNavigator();

const CartStackNavigator = () => {
    return(
        <CartStack.Navigator
            screenOptions={{ headerShown: false}}
        >
            <CartStack.Screen
                name = "CartScreen"
                component={CartScreen}
            />
            <CartStack.Screen
                name = "CheckoutScreen"
                component={CheckoutScreen}
            />
        </CartStack.Navigator>
    );
};


export default RootNavigator;



