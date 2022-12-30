import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/RestaurantInfoComponent/Header';
import Body from '../../components/RestaurantInfoComponent/Body';
import restaurants from '../../../assets/data/restaurants.json';


export default function ResturantInfoScreen() {
  return (
        <Header restaurant={restaurants[0]}/>
     
       
       
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

