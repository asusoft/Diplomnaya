import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/HomeScreen/Header';
import SearchBar from '../../components/HomeScreen/SearchBar';

export default function HomeScreen() {
  return (
    
      
      <SafeAreaView style={styles.container}>
          <Header/>
          <SearchBar />
          <StatusBar style="auto" />
      </SafeAreaView>
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },
});
