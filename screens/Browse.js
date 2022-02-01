import { View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Searchbar from "../components/Browse/Searchbar";
import Listing from "../components/Browse/Listing";

export default function Browse({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#eee",
          flexDirection: "column",
        }}
      >
        <Searchbar />
        <Listing title={"Recent"} />
        <Listing title={"Popular"} />
      </View>

      <Divider width={1} />
      <BottomTab navigation={navigation} />
    </>
  );
}
