import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const Categories = ({ category }) =>{
    const onPress = () => {
        console.warn('Category Pressed')
    }

    return(
        <Pressable onPress={onPress} style={styles.CategoryItem}>
            <View style={styles.CategoryItemImageHolder}>
                <Image
                    style={styles.CategoryImage}
                    source={{
                        uri: category.imageUrl,
                    }}
                />
            </View>
            <Text style={styles.CategoryName}>{category.name}</Text>
        </Pressable>
    );
};

export default Categories;


const styles = StyleSheet.create({
    Categories: {
      margin: 10,
      padding: 10,
      borderRadius: 20,
    },

    CategoryItem: {
        backgroundColor: "#FFFAF0",
        margin: 8,
        width: 80,
        height: 110,
        borderRadius: 15,
        alignItems: "center",
        padding: 10,
    },

    CategoryItemImageHolder: {
        backgroundColor: "#FFFAF0",
        height: "70%",
        width: "100%",
        borderRadius: 100,
        padding: 7
    },

    CategoryName: {
        fontSize: 12,
        marginTop: "auto",
        marginBottom:5
    },

    CategoryImage: {
        flex:1,
        borderRadius: 35,
    },

  });
  