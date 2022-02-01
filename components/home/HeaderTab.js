import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTab(props) {
  return (
    <View
      style={{ flexDirection: "row", alignSelf: "center", paddingTop: "2%" }}
    >
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Dine in"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: "2%",
        paddingHorizontal: "5%",
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontFamily: "Product-Sans-Bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
