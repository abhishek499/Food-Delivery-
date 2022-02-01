import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";

const fetchFont = async () => {
  await useFonts();
};

const items = [
  { image: require("../../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../../assets/images/bread.png"), text: "Bakery Items" },
  { image: require("../../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../../assets/images/deals.png"), text: "Deals" },
  { image: require("../../assets/images/coffee.png"), text: "Coffee" },
  { image: require("../../assets/images/desserts.png"), text: "Dessert" },
];

export default function Categories() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={(err) => console.log(err)}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 10,
        padding: 10,
        paddingLeft: 20,
        height: 70,
        position: "relative",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              Alert.alert(
                "Caterogry Pressed",
                item.text + " is being prepared, Wait"
              )
            }
          >
            <View
              style={{
                height: "80%",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: 30,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontFamily: "Product-Sans-Bold" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
