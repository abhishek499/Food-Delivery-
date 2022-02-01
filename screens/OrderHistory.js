import { View, Text } from "react-native";
import React from "react";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements/dist/divider/Divider";
import ChangeAddress from "../components/cart/ChangeAddress";

export default function OrderHistory({ navigation }) {
  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontFamily: "Product-Sans-Italic", fontSize: 20 }}>
          Order History
        </Text>
      </View>
      <Divider width={1} />
      <BottomTab navigation={navigation} />
    </>
  );
}
