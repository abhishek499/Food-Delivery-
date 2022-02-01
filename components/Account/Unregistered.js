import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Unregistered() {
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
            fontSize: 14,
          }}
        >
          Haven't Registered yet?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              alignItems: "center",
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              margin: 2,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "Product-Sans-Italic", margin: 4 }}>or</Text>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            alignItems: "center",
            fontFamily: "Product-Sans-Italic",
            fontSize: 14,
          }}
        >
          Already Have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              alignItems: "center",
              fontFamily: "Product-Sans-Bold",
              fontSize: 16,
              margin: 2,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
