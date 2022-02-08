import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Tittle from "../components/Account/Tittle";
import Unregistered from "../components/Account/Unregistered";
import Registered from "../components/Account/Registered";
import RegisteredUserMenu from "../components/Account/RegisteredUserMenu";
import { auth } from "../firebase";

export default function Account({ navigation }) {
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsloggedIn(true);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <View
        style={{ flex: 1, paddingVertical: "13%", paddingHorizontal: "4%" }}
      >
        <Tittle />
        {!isloggedIn ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Unregistered navigation={navigation} />
          </View>
        ) : (
          <>
            <Registered navigation={navigation} />
            <RegisteredUserMenu navigation={navigation} />
          </>
        )}
      </View>
      <Divider width={1} />
      <BottomTab navigation={navigation} />
    </>
  );
}
