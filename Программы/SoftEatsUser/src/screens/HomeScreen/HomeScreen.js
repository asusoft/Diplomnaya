import { FlatList, SafeAreaView, ScrollView, Dimensions, Platform,StyleSheet, Text, View } from 'react-native';
import Categories from '../../components/HomeScreenComponents/Categories';
import Header from '../../components/HomeScreenComponents/Header';
import SearchBar from '../../components/HomeScreenComponents/SearchBar';
import dishCategories from '../../../assets/data/dishCategories.json';
import MostPopular from '../../components/HomeScreenComponents/MostPopular';
import mostPopular from '../../../assets/data/mostPopular.json';
import RestaurantItem from '../../components/HomeScreenComponents/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const SPACING = 7;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.52 : width * 0.54;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView>
        <Header/>
        <SearchBar />
        <View>
          <Categories categories={ dishCategories } />
            <Text style={styles.SectionHeader}>Restaurants</Text>
        </View>
        <View style={styles.RestourantItemContainer}>
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
                  <RestaurantItem restaurant={ item }/>
                );
              }}
          />
        </View>
        <Text style={styles.SectionHeader}>Most Popular</Text>
        <FlatList data={mostPopular}
          renderItem= {({ item }) => <MostPopular popular={ item } />}
          showsVerticalScrollIndicator={false}
          />
      </Animated.ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },

  RestourantItemContainer: {
    marginVertical: 10,
    marginRight:20,
    marginLeft:10,
  },

  SectionHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginStart: 25,
  },

CategoryItems: {
    borderRadius: 20,
    paddingLeft: 10,
    margin:10,
  },
});
