import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function ChangeAddress(props) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
      }}
    >
      <View
        style={{
          height: "80%",
          width: "100%",
          backgroundColor: "#000",
          opacity: 0.1,
        }}
      />
      <View
        style={{
          backgroundColor: "#fff",
          // height: "35%",
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          paddingHorizontal: 50,
          paddingVertical: 20,
          bottom: 0,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Product-Sans-Bold" }}>
            Change Delivery Address
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.modal()}>
            <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Address title={"Home"} address={"Marketonic, SN Tower"} />
        <Address title={"Work"} address={"Marketonic, SN Tower"} />
        <AddNew />
      </View>
    </View>
  );
}

const Address = (props) => {
  return (
    <>
      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <View
          style={{
            height: 45,
            width: 45,
            borderRadius: 10,
            // borderWidth: 0.9,
            borderColor: "#979dac",
            justifyContent: "center",
            backgroundColor: "#ffe0e0",
          }}
        >
          {props.title === "Home" ? (
            <Image
              source={require("../../assets/images/homepage.png")}
              style={{
                height: 22,
                width: 22,
                tintColor: "#ff4949",
                alignSelf: "center",
              }}
            />
          ) : (
            <Ionicons
              name="ios-location-sharp"
              size={25}
              color="#ff4949"
              style={{ alignSelf: "center" }}
            />
          )}
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Product-Sans-Bold",
                fontSize: 18,
              }}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontFamily: "Product-Sans-Regular",
                fontSize: 14,
                color: "#adb5bd",
              }}
            >
              {props.address}
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "99%",
          height: 10,
          borderBottomWidth: 1,
          borderStyle: "dashed",
          borderRadius: 1,
          borderBottomColor: "#e9ecef",
        }}
      />
    </>
  );
};

const AddNew = () => {
  return (
    <View style={{ paddingVertical: 10, flexDirection: "row" }}>
      <View
        style={{
          height: 45,
          width: 45,
          borderRadius: 10,
          // borderWidth: 0.9,
          borderColor: "#979dac",
          justifyContent: "center",
          backgroundColor: "#ffe0e0",
        }}
      >
        <Entypo
          name="plus"
          size={25}
          color="#ff4949"
          style={{ alignSelf: "center" }}
        />
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          marginHorizontal: 15,
          flexDirection: "row",
          width: "86%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 22,
            color: "#ff4949",
          }}
        >
          Add New Address
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
