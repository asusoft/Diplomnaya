import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Categories from '../../components/HomeScreen/Categories';
import Header from '../../components/HomeScreen/Header';
import SearchBar from '../../components/HomeScreen/SearchBar';
import dishCategories from '../../../assets/data/dishCategories.json';
import MostPopular from '../../components/HomeScreen/MostPopular';
import mostPopular from '../../../assets/data/mostPopular.json'

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
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
             <Text style={styles.SectionHeader}>Most Popular</Text>
          </View>
          <FlatList data={mostPopular}
            renderItem= {({ item }) => <MostPopular popular={ item } />}
            showsVerticalScrollIndicator={false}
            />
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
