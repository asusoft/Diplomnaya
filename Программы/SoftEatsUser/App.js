import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ResturantInfoScreen from "./src/screens/RestaurantInfo/RestaurantInfoScreen";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer> 
  );
}


