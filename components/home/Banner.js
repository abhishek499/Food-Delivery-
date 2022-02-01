import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import useFonts from "../hooks/useFonts";

const fetchFont = async () => {
  await useFonts();
};

const categories = [
  {
    img: "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
    tittle: "Home Made",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    tittle: "Pizza",
  },
  {
    img: "https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png",
    tittle: "Chinese",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    tittle: "North Indian",
  },
  {
    img: "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
    tittle: "Burger",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    tittle: "Rolls",
  },
  {
    img: "https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png",
    tittle: "Desert",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    tittle: "South Indian",
  },
];

export default function Banner() {
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
    // <View style={styles.bannerBox}>
    <View style={styles.banner}>
      {/* <Text>Banner Screen</Text> */}
      {/* <Circle /> */}
      {categories.map((cat, index) => (
        <Circle key={index} image={cat.img} tittle={cat.tittle} />
      ))}
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  bannerBox: {
    height: "20%",
    width: "100%",
    alignSelf: "center",
  },
  banner: {
    height: 250,
    width: "95%",
    backgroundColor: "white",
    opacity: 1,
    marginHorizontal: "2.5%",
    marginTop: "2.5%",
    borderRadius: 20,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 15,
    flexWrap: "wrap",
    paddingTop: 10,
    paddingBottom: 0,
  },
});

const Circle = (props) => {
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            // marginBottom: 20,
            marginRight: 7,
          }}
        >
          <Image
            source={{ uri: props.image }}
            // resizeMethod="auto"
            resizeMode="contain"
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            color: "black",
            fontFamily: "Product-Sans-Regular",
            paddingTop: 2,
          }}
        >
          {props.tittle}
        </Text>
      </View>
    </>
  );
};
