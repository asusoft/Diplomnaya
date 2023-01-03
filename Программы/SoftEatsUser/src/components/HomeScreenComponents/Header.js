import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../constants/icons'
import { useDrawerStatus } from '@react-navigation/drawer';

const Header = () =>{
  const drawerIsOpen =useDrawerStatus();
  const navigation = useNavigation();
  const onPress = () => {
    navigation.toggleDrawer();
  }
    return(
      <View>
        <View style={styles.top}>
          <Pressable onPress={onPress}>
          <Image
            source={ drawerIsOpen === "closed" ? icons.menu : icons.cross}
            style={{ height: 30, width: 30, borderRadius: 10 , tintColor: "black"}}/>
          </Pressable>
          <Pressable style={styles.location}>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.locationIcon}>
              <SimpleLineIcons name="location-pin" size={17} color="black" />
            </View>
          </Pressable>
            <StatusBar style="auto" />
        </View>

        <View style={styles.greetings}>
            <Text style={styles.greetingHeader}>Hello, Abubakar</Text>
            <Text style={styles.greetingSubheader}>what do you want to eat?</Text>
        </View>
      </View>
    );
};

export default Header;

const styles = StyleSheet.create({
  top: {
    margin: 5,
    marginHorizontal: 20,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    marginLeft: "auto",
    flexDirection: "row",
    backgroundColor: 'white',
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#FFFAF0",
  },

  locationIcon: {
    marginLeft: 25,
  },

  locationText: {
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
  },

  greetings: {
    margin: 5,
    marginLeft: 20,
    marginTop: 20,
    padding: 5,
  },

  greetingHeader: {
    fontWeight: "700",
    fontSize: 25,
  },

  greetingSubheader: {
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
    marginTop: 10,
  }
});
