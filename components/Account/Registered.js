import { View, Text } from "react-native";
import React from "react";

export default function Registered() {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 80,
          justifyContent: "center",
          paddingLeft: "2%",
        }}
      >
        <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 25 }}>
          Abhishek
        </Text>
        <Text
          style={{
            fontFamily: "Product-Sans-Regular",
            fontSize: 14,
            color: "#adb5bd",
          }}
        >
          abhishek@marketonicIndia.com
        </Text>
      </View>
      <View
        style={{
          width: "97%",
          borderBottomWidth: 1,
          borderStyle: "dashed",
          borderRadius: 1,
          borderBottomColor: "#6c757d",
          marginHorizontal: "1.5%",
        }}
      />
    </>
  );
}
