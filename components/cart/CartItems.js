import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function CartItems() {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          marginTop: 20,
          width: "90%",
          //   height: 80,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
      >
        <CartItem />
        <CartItem />
        <CartItem />
      </View>
    </View>
  );
}

const CartItem = () => {
  const [available, setAvailable] = useState(true);
  return (
    <View
      style={{
        marginVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/640px-Indian-vegetarian-mark.svg.png",
        }}
        resizeMode="contain"
        style={{ height: 10, width: 10 }}
      />
      <Text
        style={{
          paddingLeft: 10,
          fontFamily: "Product-Sans-Bold",
          width: "50%",
        }}
      >
        Pakora Chola(1 Plate)
      </Text>
      {!available ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              width: "45%",
              height: 27,
              borderWidth: 0.8,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#adb5bd",
            }}
          >
            <Text style={{ color: "#adb5bd" }}>Unavailable</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: "10%" }}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* <View
          style={{
            flexDirection: "row",
            alignContent: "space-around",
            justifyContent: "center",
            alignSelf: "center",
          }}
        > */}
          <QuantityWidget />
          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontFamily: "Product-Sans-Bold" }}>₹ 150</Text>
          </View>
          {/* </View> */}
        </>
      )}
    </View>
  );
};

const QuantityWidget = () => {
  const [item, setitem] = useState(1);
  return (
    <View
      style={{
        // backgroundColor: "red",
        width: "28%",
        height: 30,
        borderWidth: 0.8,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => setitem(item - 1)}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo
          name="minus"
          size={15}
          color="black"
          style={{ alignItems: "center" }}
        />
      </TouchableOpacity>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontFamily: "Product-Sans-Bold" }}>
          {item}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setitem(item + 1)}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo
          name="plus"
          size={15}
          color="black"
          style={{ alignItems: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};
