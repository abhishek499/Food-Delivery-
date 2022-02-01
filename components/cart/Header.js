import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Header({ navigation, ...props }) {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        paddingLeft: 25,
        paddingTop: 40,
        backgroundColor: "#fff",
        paddingBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{ marginRight: 25 }}
        onCLick={() => navigation.navigate("Home")}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 20 }}>
        {props.title}
      </Text>
    </View>
  );
}
