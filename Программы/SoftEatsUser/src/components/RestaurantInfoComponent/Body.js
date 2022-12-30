import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../HomeScreenComponents/Categories';

import dishCategories from '../../../assets/data/dishCategories.json';
import Rating from '../HomeScreenComponents/Rating';


const Body = ({restaurant}) =>{
    const onPress = () => {
        console.warn('Back Pressed')
    }
    return(
      <View style={styles.Body}>
        <Text>Body</Text>
      </View>
    );
};

export default Body;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: 'gray',

  },

});
