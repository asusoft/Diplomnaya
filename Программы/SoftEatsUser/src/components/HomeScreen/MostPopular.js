import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MostPopular = ({ popular }) =>{
    const onPress = () => {
        console.warn('Dish Pressed')
    }

    return(
        <Pressable onPress={onPress} style={styles.PopularItem}>
            <View style={styles.PopularItemImageHolder}>
                <Image
                    style={styles.PopularImage}
                    source={{
                        uri: popular.image,
                    }}
                />
            </View>
            <View style={styles.ItemInfo}>
                <Text style={styles.ItemName}>{popular.name}</Text>
                <Text style={styles.ItemDescription}>{popular.description}</Text>
                <Text style={styles.ItemPrice}>${popular.price}</Text>
            </View >
            <View style={styles.Like}>
                <FontAwesome style={styles.Like}name="heart" size={24} color="red" />
                <View>
                    <FontAwesome name="star-half-o" size={20} color="black" />
                    <Text style={styles.RatingText}>{popular.rating}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default MostPopular;


const styles = StyleSheet.create({

    PopularItem: {
        height: 130,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#FFFAF0",
        
    },

    PopularItemImageHolder: {
        backgroundColor: "#FFFAF0",
        height: "100%",
        width: "30%",
        borderRadius: 5,
    },

    PopularImage: {
        flex:1,
        margin: 10,
    },

    ItemInfo: {
        margin: 20,
        justifyContent: "space-between",
        width:"50%",
    },

    ItemName: {
        fontSize: 15,
        marginBottom:5,
        fontWeight: "600"
    },

    ItemDescription: {
        fontSize: 12,
        marginBottom:5,
        fontWeight: "400"
    },

    ItemPrice: {
        fontSize: 15,
        marginBottom:5,
        fontWeight: "600"
    },
    Like: {
        marginLeft: "auto",
        marginRight: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    RatingText: {
        fontSize: 10
    }

  });
  