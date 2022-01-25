import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Divider } from "react-native-elements";
import Banner from "../components/home/Banner";
import BottonTab from "../components/home/BottomTab";
import Cart from "../components/home/Cart";
import Categories from "../components/home/Categories";
import HeaderTab from "../components/home/HeaderTab";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import SafeViewAndroid from "../components/home/SafeViewAndroid";
import SearchBar from "../components/home/SearchBar";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View
        style={{
          backgroundColor: "white",
          padding: "2%",
        }}
      >
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>

      <ScrollView>
        <Categories />
        <Banner />
        <View>
          <RestaurantItem navigation={navigation} />
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        <Cart />
        <Divider width={1} />
        <BottonTab />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
