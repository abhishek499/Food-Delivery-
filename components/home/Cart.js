import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cart() {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#000",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        justifyContent: "center",
        opacity: 0.87,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <MaterialCommunityIcons
          name="shopping-outline"
          size={30}
          color="white"
        />
        <Text style={{ color: "white" }}>Tab to view Items in the Cart</Text>
        {/* <View
          style={{
            width: 110,
            height: 45,
            backgroundColor: "#fff",
            right: 0,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <TouchableOpacity
          style={{
            width: 110,
            height: 45,
            backgroundColor: "#fff",
            right: 0,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
        >
          <Text>2 Items | ₹ 150</Text>
          <Text style={{ fontWeight: "bold" }}>CheckOut</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
}
