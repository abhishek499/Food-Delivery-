import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Unregistered({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            alignItems: "center",
            fontFamily: "Product-Sans-Italic",
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Haven't Registered yet?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            width: 80,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              alignItems: "center",
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              margin: 2,
              color: "#fff",
              elevation: 5,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ fontFamily: "Product-Sans-Italic", fontSize: 18, margin: 4 }}
      >
        or
      </Text>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            alignItems: "center",
            fontFamily: "Product-Sans-Italic",
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Already Have an account?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            width: 80,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              alignItems: "center",
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              margin: 2,
              color: "#fff",
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
