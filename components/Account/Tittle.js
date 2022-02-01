import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Tittle() {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold-Italic",
              fontSize: 22,
              marginLeft: "10%",
            }}
          >
            My Account
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
