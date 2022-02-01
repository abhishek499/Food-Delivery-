import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { View, Text } from "react-native";
import React, { useState } from "react";
// import SearchBar from "react-native-elements/dist/searchbar/SearchBar-android";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  return (
    // <View>
    <View style={{ marginTop: "10%", alignItems: "center" }}>
      <SearchBar
        placeholder="Search here"
        placeholderTextColor={"#000"}
        cancelButtonProps={{
          color: "#000",
          buttonTextStyle: { fontFamily: "Product-Sans-Bold" },
        }}
        onChangeText={(item) => setSearch(item)}
        value={search}
        inputStyle={{
          backgroundColor: "#fff",
          height: 10,
          fontFamily: "Product-Sans-Regular",
        }}
        inputContainerStyle={{
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 50,
        }}
        containerStyle={{
          borderRadius: 5,
          width: "95%",
          height: 70,
          backgroundColor: "#e9ecef",
          borderRadius: 10,
          fontFamily: "Product-Sans-Regular",
        }}
      />
    </View>
  );
}
