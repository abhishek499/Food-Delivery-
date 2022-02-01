import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SavingBanner() {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <View
        style={{
          width: "90%",
          height: 80,
          borderRadius: 20,
          justifyContent: "center",
          backgroundColor: "#cdedc3",
        }}
        // colors={["#34ac22", "#cdedc3"]}
        // start={[0.9, 0]}
        // end={}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#229c30",
            fontFamily: "Product-Sans-Bold",
            paddingLeft: "5%",
          }}
        >
          ₹40 total savings
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Product-Sans-Bold",
            paddingLeft: "5%",
          }}
        >
          on this bill
        </Text>
      </View>
    </View>
  );
}
