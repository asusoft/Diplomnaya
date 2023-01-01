import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import Header from '../../components/RestaurantInfoComponent/Header';
import Body from '../../components/RestaurantInfoComponent/Body';
import restaurants from '../../../assets/data/restaurants.json';
import { useRoute, useNavigation } from '@react-navigation/native';


const ResturantInfoScreen = () =>{

  const navigation = useNavigation();
  const route = useRoute();
  
  const { itemId, previous_screen } = route.params;

  const goBack = () => {
    navigation.navigate(previous_screen);
  }

  const onPress = () => {
    console.warn(itemId)
  }

  const show = () => {
    console.warn(previous_screen)
  }
  return(
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>PRESS ME!!!</Text>
      </Pressable>
      <Pressable onPress={goBack}>
        <Text>Go Back!!!</Text>
      </Pressable>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Pressable onPress={show}>
        <Text>SHOW SOURCE NAME</Text>
      </Pressable>
    </View>
  );
}; 

export default ResturantInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});

