import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Rating from './Rating';

import restaurants from '../../../assets/data/restaurants.json'

const SPACING = 7;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.52 : width * 0.54;

export default function RestaurantItem() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(item) => item.key}
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width: ITEM_SIZE }}>
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
                  source={{ uri: item.image }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 14 }} numberOfLines={1}>
                  {item.name}
                </Text>
                <Rating rating={item.rating} />
                <View style={styles.durations}>
                    <View style={styles.duration}>
                        <Text style={styles.durationText}>{item.minDeliveryTime} - {item.maxDeliveryTime} mins</Text>
                    </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginVertical: 10
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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