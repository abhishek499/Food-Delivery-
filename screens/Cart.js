import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Header from "../components/cart/Header";
import SavingBanner from "../components/cart/SavingBanner";
import CartItems from "../components/cart/CartItems";
import Coupon from "../components/cart/Coupon";
import Bill from "../components/cart/Bill";
import Checkout from "../components/cart/Checkout";

export default function Cart({ navigation }) {
  return (
    <>
      <Header title={"Cart"} navigation={navigation} />
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#eee" }}>
          <SavingBanner />
          <CartItems />
          <Coupon />
          <Bill />
        </View>
      </ScrollView>
      <Checkout />
    </>
  );
}
