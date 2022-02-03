import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  menuItemStyle: {
    // justifyContent: "space-between",
    marginHorizontal: 25,
    // marginRight: 30,
    paddingBottom: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontFamily: "Product-Sans-Bold",
  },
});

export default function MenuItems({ restaurantName, foods }) {
  const SubMenu = (props) => (
    <>
      <View style={{ width: "100%", paddingBottom: 20 }}>
        <View style={{ paddingBottom: 10 }}>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 25,
              marginBottom: 0,
            }}
          >
            {props.subMenu}
          </Text>
          {props.items.map((item, index) => {
            return (
              <SubMenuItem key={index} item={item.name} price={item.price} />
            );
          })}
        </View>
        <Divider width={0.5} style={{ width: "100%", alignSelf: "center" }} />
      </View>
    </>
  );

  const SubMenuItem = (props) => {
    const item = props.item;
    const price = props.price;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontFamily: "Product-Sans-Regular", fontSize: 20 }}>
          {props.item} | {props.price}
        </Text>
        <BouncyCheckbox
          // isChecked={isFoodInCart(food, cartItems)}
          iconStyle={{ borderColor: "#000" }}
          fillColor="#000"
          onPress={(checkboxValue) => selectItem(item, price, checkboxValue)}
        />
      </View>
    );
  };
  const dispatch = useDispatch();

  const selectItem = (item, price, checkboxValue) =>
    dispatch({
      type: "ADD_ON",
      payload: {
        addOn: item,
        price: price,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <View style={styles.menuItemStyle}>
      <SubMenu
        subMenu={"Offers"}
        items={[
          { name: "Offer1", price: "₹129" },
          { name: "Offer2", price: "₹159" },
          { name: "Offer3", price: "₹199" },
        ]}
      />
      <SubMenu
        subMenu={"Offers"}
        items={[
          { name: "Offer1", price: "₹129" },
          { name: "Offer2", price: "₹159" },
          { name: "Offer3", price: "₹199" },
        ]}
      />
    </View>
  );
}
