import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Pressable,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
import Rating from './Rating';

const SPACING = 7;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.52 : width * 0.54;

export default function RestaurantItem({restaurant}) {
  const navigation = useNavigation();
  const route = useRoute();

  const restaurantId = restaurant.id;
  const routeName = route.name;
  
  const onPress = () => {
    navigation.navigate('Restaurants', {
      screen: 'RestaurantInfoScreen',
      params: { itemId: restaurantId, previous_screen: routeName},
    });
  }
  return (
        <Pressable onPress={onPress} 
        style={{ width: ITEM_SIZE }}>
          <View
            style={{
              marginHorizontal: SPACING,
              padding: SPACING,
              alignItems: 'center',
              backgroundColor: '#FFFAF0',
              borderRadius: 34,
            }}
          >
            <Image
              source={{ uri: restaurant.image }}
              style={styles.posterImage}
            />
            <Text style={{ fontSize: 14 }} numberOfLines={1}>
              {restaurant.name}
            </Text>
            <Rating rating={restaurant.rating} />
            <View style={styles.durations}>
                <View style={styles.duration}>
                    <Text style={styles.durationText}>{restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} mins</Text>
                </View>
            </View>
          </View>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  durations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  duration: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },
  durationText: {
    fontSize: 11, 
    opacity: 0.4
  }
});