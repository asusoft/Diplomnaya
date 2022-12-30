import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Header = () =>{
    return(
      <View>
        <View style={styles.top}>
          <SimpleLineIcons name="menu" size={24} color="black" />
          <View style={styles.location}>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.locationIcon}>
              <SimpleLineIcons name="location-pin" size={17} color="black" />
            </View>
          </View>
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
    margin: 10,
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
    margin: 10,
    marginLeft: 20,
    marginTop: 30,
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
