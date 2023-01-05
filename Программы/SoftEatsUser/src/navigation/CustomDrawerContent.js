import "react-native-gesture-handler";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

import { View, Image, Text } from "react-native";

import COLORS from "../../assets/constants/colors";

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30
      }}
    >
      <View
        style={{
          marginLeft: 20
        }}
      >
        <View
          style={{
            marginLeft: 15,
            marginVertical: 10
          }}
        >
          <Image
            source={{
              uri:
                "https://play-lh.googleusercontent.com/BMryS7Cn454jIAVrchF9as-7WOG07H97Lugr62ISdJSo7wj1cC-0MTUm3SqSZffc7IQ"
            }}
            style={{ height: 70, width: 70, borderRadius: 20 }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 10
            }}
          >
            SOFT EATS
          </Text>
        </View>
            <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
