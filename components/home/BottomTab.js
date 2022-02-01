import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab({ navigation, ...props }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon
        icon="home"
        text="Home"
        navigation={navigation}
        navigateTo={"Home"}
      />
      <Icon
        icon="search"
        text="Browse"
        navigation={navigation}
        navigateTo={"Browse"}
      />
      <Icon
        icon="shopping-bag"
        text="Cart"
        navigation={navigation}
        navigateTo={"Cart"}
      />
      <Icon
        icon="receipt"
        text="Orders"
        navigation={navigation}
        navigateTo={"OrderHistory"}
      />
      <Icon
        icon="user"
        text="Account"
        navigation={navigation}
        navigateTo={"Account"}
      />
    </View>
  );
}

const Icon = ({ navigation, ...props }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={() => navigation.navigate(props.navigateTo)}
  >
    <View>
      <FontAwesome5
        name={props.icon}
        size={23}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      {/* <Text style={{ fontSize: 13 }}>{props.text} </Text> */}
    </View>
  </TouchableOpacity>
);
