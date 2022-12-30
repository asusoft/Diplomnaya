import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Categories from '../../components/HomeScreenComponents/Categories';
import Header from '../../components/HomeScreenComponents/Header';
import SearchBar from '../../components/HomeScreenComponents/SearchBar';
import dishCategories from '../../../assets/data/dishCategories.json';
import MostPopular from '../../components/HomeScreenComponents/MostPopular';
import mostPopular from '../../../assets/data/mostPopular.json';
import RestaurantItem from '../../components/HomeScreenComponents/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header/>
          <SearchBar />
          <Text style={styles.SectionHeader}>Explore Categories</Text>
          <View>
          <FlatList data={dishCategories}
            renderItem= {({ item }) => <Categories category={ item } />}
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
            style={styles.CategoryItems}
            />
             <Text style={styles.SectionHeader}>Restaurants</Text>
          </View>
          <View>
              <RestaurantItem restaurants={ restaurants }/>
              <Text style={styles.SectionHeader}>Most Popular</Text>
          </View>
          <FlatList data={mostPopular}
            renderItem= {({ item }) => <MostPopular popular={ item } />}
            showsVerticalScrollIndicator={false}
            />
        </ScrollView>
          
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },

  SectionHeader: {
    fontSize: 15,
    fontWeight: "600",
    marginStart: 25,
  },

CategoryItems: {
    borderRadius: 20,
    paddingLeft: 10,
    margin:10,
  },
});
