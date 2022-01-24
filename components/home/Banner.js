import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const categories = [
  { img: "https://picsum.photos/80", tittle: "Home Made" },
  { img: "https://picsum.photos/80", tittle: "Pizza" },
  { img: "https://picsum.photos/80", tittle: "Chinese" },
  { img: "https://picsum.photos/80", tittle: "North Indian" },
  { img: "https://picsum.photos/80", tittle: "Burger" },
  { img: "https://picsum.photos/80", tittle: "Rolls" },
  { img: "https://picsum.photos/80", tittle: "Desert" },
  { img: "https://picsum.photos/80", tittle: "South Indian" },
];

export default function Banner() {
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
          }}
        >
          {props.tittle}
        </Text>
      </View>
    </>
  );
};
