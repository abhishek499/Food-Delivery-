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
import Categories from "../components/home/Categories";
import HeaderTab from "../components/home/HeaderTab";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import SafeViewAndroid from "../components/home/SafeViewAndroid";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = "";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      {/* <KeyboardAvoidingView behaviour={"height"} keyboardVerticalOffset={0}> */}
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

      <Categories />
      <ScrollView>
        <Banner />
        <View>
          <RestaurantItem navigation={navigation} />
        </View>

        <Divider width={1} />
        <BottonTab />
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}
