import { View, Text } from "react-native";
import React from "react";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Tittle from "../components/Account/Tittle";
import Unregistered from "../components/Account/Unregistered";
import Registered from "../components/Account/Registered";
import RegisteredUserMenu from "../components/Account/RegisteredUserMenu";

export default function Account({ navigation }) {
  return (
    <>
      <View
        style={{ flex: 1, paddingVertical: "13%", paddingHorizontal: "4%" }}
      >
        <Tittle />
        {/* <View style={{ flex: 1 }}>
          <Unregistered />
        </View> */}
        <Registered />
        <RegisteredUserMenu />
      </View>
      <Divider width={1} />
      <BottomTab navigation={navigation} />
    </>
  );
}
