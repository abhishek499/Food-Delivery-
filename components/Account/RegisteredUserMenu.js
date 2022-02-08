import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Tittle from "./Tittle";
import { auth } from "../../firebase";
import { NavigationContainer } from "@react-navigation/native";

const MenuItem = (props) => {
  return (
    <TouchableOpacity
      style={{ width: "100%", flexDirection: "row", marginTop: 15 }}
      activeOpacity={0.5}
    >
      <View
        style={{
          height: 27,
          width: 27,
          borderRadius: 20,
          backgroundColor: "#DCDADE",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/shopping-bag1.png")}
          style={{ height: 18, width: 15 }}
          resizeMode={"contain"}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Product-Sans-Regular",
            marginLeft: 10,
            fontSize: 16,
          }}
        >
          {props.tittle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Menu = (props) => {
  const items = [
    "Your Orders",
    "Favorite Orders",
    "Address Book",
    "Online Ordering Help",
  ];
  console.log(props.items);
  return (
    <View style={{ paddingTop: 30, paddingHorizontal: "2%" }}>
      <Text
        style={{
          fontFamily: "Product-Sans-Regular",
          paddingBottom: 2,
          color: "#5A575F",
        }}
      >
        {props.tittle}
      </Text>
      {props.items.map((item, index) => (
        <MenuItem key={index} tittle={item} />
      ))}
    </View>
  );
};

const FooterItem = (props) => (
  <View style={{}}>
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={{ paddingHorizontal: "2%", paddingVertical: 2 }}
    >
      <Text style={{ fontFamily: "Product-Sans-Regular", color: "#626065" }}>
        {props.tittle}
      </Text>
    </TouchableOpacity>
  </View>
);

const Footer = (props) => (
  <View
    style={{
      width: "100%",
      height: 100,
      marginTop: 20,
      paddingVertical: 10,
    }}
  >
    {props.btn.map((item, index) => (
      <FooterItem key={index} tittle={item.tittle} onPress={item.onPress} />
    ))}
  </View>
);

export default function RegisteredUserMenu({ navigation }) {
  const handlePress = () => alert("btn is pressed");

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <View>
      <Menu
        tittle={"FOOD ORDER"}
        items={[
          "Your Orders",
          "Favorite Orders",
          "Address Book",
          "Online Ordering Help",
        ]}
      />
      <Menu
        tittle={"TABLE BOOKINGS"}
        items={["Your Bookings", "Table Reservation Help", "About"]}
      />
      <Footer
        btn={[
          { tittle: "Send Feedback", onPress: handlePress },
          { tittle: "Report a Safety Emergency", onPress: handlePress },
          { tittle: "Rate us on Play Store", onPress: handlePress },
          { tittle: "Logout", onPress: handleLogout },
        ]}
      />
    </View>
  );
}
