import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';

const Categories = ({ categories }) =>{
    const onPress = () => {
        console.warn('Category Pressed')
    }

    return(
        <View style= {{ marginHorizontal: 15, marginBottom: 5}}>
            <FlatList 
                data={categories}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}
                style={styles.CategoryItems}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={onPress} style={styles.CategoryItem}>
                            <Text style={styles.CategoryName}>{item.name}</Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
};

export default Categories;


const styles = StyleSheet.create({
    CategoryItem: {
        backgroundColor: "#FFFAF0",
        margin: 8,
        width: 80,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        
    },

    CategoryName: {
        fontSize: 12,
    },

  });
  