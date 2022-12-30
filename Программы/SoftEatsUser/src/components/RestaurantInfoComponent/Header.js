import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../HomeScreenComponents/Categories';

import dishCategories from '../../../assets/data/dishCategories.json';
import Rating from '../HomeScreenComponents/Rating';
import Body from './Body';


const Header = ({restaurant}) =>{
    const onPress = () => {
        console.warn('Back Pressed')
    }
    return(
      <View style={styles.Header}>
        
        <Image source={{ uri: restaurant.image }} style={styles.image} />
        
        <View style={styles.RestaurantInfo}>
            <Text style={styles.RestaurantName}>{restaurant.name}</Text>
            <Text style={styles.RestaurantAddress}>{restaurant.address}</Text>
            <Text style={{ fontSize: 15, fontWeight: '500'}}>Delivers in {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
            <Rating rating={restaurant.rating} />
        </View>

        <Pressable onPress={onPress} style ={styles.Back}>
            <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
      </View>
    );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    position: 'relative',
    overflow: "hidden",
    flex: 0.5,
    alignItems: 'center',
  },

  image: {
    position:'absolute',
    width: '100%',
    height: '75%',
  },

  RestaurantInfo: {
    backgroundColor: "#FFFAF0",
    position: 'absolute',
    width: "85%",
    height: "45%",
    top: "50%",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  RestaurantName: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 35,

  },

  RestaurantAddress: {
    fontSize: 18,
    fontWeight: "500",
    opacity: 0.4
  },

  Back: {
    backgroundColor: "#FFFAF0",
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 1000,
    marginTop: 55,
    marginStart: 20,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: 'center'
  }
});
