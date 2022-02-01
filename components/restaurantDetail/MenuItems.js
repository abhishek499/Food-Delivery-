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
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginRight: 30,
  },
  titleStyle: {
    fontSize: 19,
    fontFamily: "Product-Sans-Bold",
  },
});

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <View>
      {foods.map((food, index) => (
        <>
          <TouchableOpacity key={index}>
            <View style={styles.menuItemStyle} key={food.key}>
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  isChecked={isFoodInCart(food, cartItems)}
                  iconStyle={{ borderColor: "#000" }}
                  fillColor="#000"
                  onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                />
              )}
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider
              width={0.5}
              style={{ width: "85%", alignSelf: "center" }}
            />
          </TouchableOpacity>
        </>
      ))}

      {/* <FlatList
        data={foods}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity key={item.key}>
              <View key={item.key}>
                <View style={styles.menuItemStyle}>
                  <BouncyCheckbox isChecked={isChecked} />
                  <FoodInfo food={item} />
                  <FoodImage food={item} />
                </View>
                <Divider width={1.2} />
              </View>
            </TouchableOpacity>
          );
        }}
      /> */}
    </View>
  );
}

const FoodInfo = (props) => (
  <View
    style={{
      width: "62%",
      justifyContent: "space-evenly",
      marginRight: 10,
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{ fontFamily: "Product-Sans-Regular" }}>
      {props.food.description}
    </Text>
    <Text style={{ fontFamily: "Product-Sans-Regular" }}>
      {props.food.price}
    </Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: props.marginLeft,
      }}
    />
  </View>
);
