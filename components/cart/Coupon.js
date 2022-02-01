import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Coupon() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Product-Sans-Bold",
          fontSize: 15,
          marginLeft: "7%",
          marginTop: 20,
          marginBottom: 7,
        }}
      >
        Offers & Benifits
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: "#fff",
          width: "90%",
          height: 60,
          marginHorizontal: "5%",
          borderRadius: 20,
          paddingLeft: "4%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontFamily: "Product-Sans-Bold" }}>
          Apply Coupon
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
