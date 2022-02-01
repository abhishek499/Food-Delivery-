import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Bill() {
  const [delivery, setDelivery] = useState(true);
  const [discount, setDiscount] = useState(true);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontFamily: "Product-Sans-Bold",
          fontSize: 15,
          marginLeft: "7%",
          marginTop: 20,
          marginBottom: 7,
        }}
      >
        Bill Details
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          width: "90%",
          //   height: 60,
          marginHorizontal: "5%",
          borderRadius: 20,
          paddingHorizontal: "4%",
          paddingVertical: "2%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Billing title={"Item Total"} price={"₹ 450"} />

        {delivery ? (
          <Billing title={"Delivery Fee | 0.8Kms"} price={"₹ 18"} />
        ) : (
          <></>
        )}

        {discount ? <Billing title={"Discount"} price={"-₹ 40"} /> : <></>}
        <Billing title={"Tax and Charges"} price={"₹ 45"} />
        <View
          style={{
            width: "99%",
            height: 10,
            borderBottomWidth: 1,
            borderStyle: "dashed",
            borderRadius: 1,
            borderBottomColor: "#6c757d",
          }}
        />
        <Billing title={"To Pay"} price={"₹ 472"} color={true} />
      </View>
    </View>
  );
}

const Billing = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        width: "95%",
        paddingVertical: "2%",
      }}
    >
      <Text
        style={{
          color: props.color ? "#000" : "#6c757d",
          fontFamily: "Product-Sans-Regular",
          fontSize: 14.5,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          color: "#000",
          fontFamily: "Product-Sans-Bold",
          fontSize: 14.5,
        }}
      >
        {props.price}
      </Text>
    </View>
  );
};
