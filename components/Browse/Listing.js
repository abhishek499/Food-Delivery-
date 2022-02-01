import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const recent = [
  {
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    tittle: "Pizza",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    tittle: "North Indian",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    tittle: "Rolls",
  },

  {
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    tittle: "South Indian",
  },
];

export default function Listing(props) {
  return (
    <KeyboardAvoidingView
      style={{
        marginTop: 15,
        backgroundColor: "#fff",
        height: 150,
        width: "100%",
        paddingHorizontal: "2%",
      }}
    >
      <Text
        style={{
          fontFamily: "Product-Sans-Bold",
          fontSize: 18,
          marginVertical: 5,
          marginHorizontal: "3%",
        }}
      >
        {props.title}
      </Text>
      <View style={{ flexDirection: "row" }}>
        {recent.map((item, index) => (
          <Food key={index} image={item.img} title={item.tittle} />
        ))}
        {/* <RecentFood image={recent[0].img} title={"Pizza"} /> */}
      </View>
    </KeyboardAvoidingView>
  );
}

const Food = (props) => (
  <TouchableOpacity
    style={{
      flexDirection: "column",
    }}
  >
    <View
      style={{
        backgroundColor: "red",
        backgroundColor: "#eee",
        height: 80,
        width: 80,
        borderRadius: 40,
        marginHorizontal: 5,
      }}
    >
      <Image
        source={{ uri: props.image }}
        resizeMode="contain"
        style={{ height: 80, width: 80, borderRadius: 40 }}
      />
    </View>
    <Text
      style={{
        alignSelf: "center",
        fontFamily: "Product-Sans-Regular",
        fontSize: 14,
        paddingTop: 7,
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
