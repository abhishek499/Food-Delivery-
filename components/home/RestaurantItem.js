import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "../../firebase";
import { useDispatch } from "react-redux";

// export const localRestaurants = [
//   {
//     name: "Beachside Bar",
//     image_url:
//       "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 4.5,
//   },
//   {
//     name: "Benihana",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 3.7,
//   },
//   {
//     name: "India's Grill",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Indian", "Bar"],
//     price: "$$",
//     reviews: 700,
//     rating: 4.9,
//   },
//   {
//     name: "India's Grill",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Indian", "Bar"],
//     price: "$$",
//     reviews: 700,
//     rating: 4.9,
//   },
//   {
//     name: "Benihana",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 3.7,
//     key: 5,
//   },
// ];

const RestaurantInfo = (props) => {
  const item = props.name;
  const type = props.type;
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const selectItem = (item, quantity) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: item,
        quantity: quantity,
        checkboxValue: true,
        type: type,
        price: props.price,
      },
    });

  //selectedItems: { items: [{item: "", quantity: 0}], restaurantName: "" },

  const addToCart = () => {
    setQuantity(quantity + 1);
    selectItem(item, quantity);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 15,
        paddingBottom: 15,
      }}
    >
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 15, fontFamily: "Product-Sans-Bold" }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Product-Sans-Bold",
            width: "100%",
            color: "#79767D",
          }}
          numberOfLines={1}
        >
          {props.detail}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            fontFamily: "Product-Sans-Bold",
          }}
        >
          {props.price}
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: "#000",
          // height: 25,
          // width: 48,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          flexDirection: "row",
        }}
      >
        {/* <Text style={{ color: "#fff", alignItems: "center" }}>
          {props.rating}
        </Text>
        <FontAwesome name="star" size={10} color="#fff" /> */}
        {quantity === 0 ? (
          <TouchableOpacity
            style={{
              width: 80,
              height: 40,
              backgroundColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={() => addToCart()}
          >
            <Text
              style={{
                fontFamily: "Product-Sans-Bold",
                color: "#fff",
                fontSize: 15,
              }}
            >
              Add +
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              // backgroundColor: "red",
              width: 80,
              height: 33,
              borderWidth: 0.8,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => setQuantity(quantity - 1)}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="minus"
                size={16}
                color="black"
                style={{ alignItems: "center" }}
              />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontFamily: "Product-Sans-Bold" }}>
                {quantity}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="plus"
                size={15}
                color="black"
                style={{ alignItems: "center" }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const RestaurantImage = (props) => {
  const [heart, setHeart] = useState(false);

  const Heart = () => {
    return heart ? (
      <Entypo name="heart" size={25} color="#FF4242" />
    ) : (
      <Entypo name="heart-outlined" size={25} color="#fff" />
    );
  };

  const Type = () => {
    return props.type === "veg" ? (
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/640px-Indian-vegetarian-mark.svg.png",
        }}
        resizeMode="contain"
        style={{ height: 18, width: 18 }}
      />
    ) : (
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/640px-Indian-vegetarian-mark.svg.png",
        }}
        resizeMode="contain"
        style={{ height: 18, width: 18, tintColor: "maroon" }}
      />
    );
  };

  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <TouchableOpacity
        activeOpacity={0.1}
        style={{ position: "absolute", right: 10, top: 10 }}
        onPress={() => (heart ? setHeart(false) : setHeart(true))}
      >
        <Heart />
      </TouchableOpacity>
      <View style={[styles.typeBox]}>
        <Type />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  typeBox: {
    left: 10,
    top: 10,

    position: "absolute",
    elevation: 30,
  },
});

export default function RestaurantItem({ navigation, ...props }) {
  const [restaurant, setRestaurant] = useState([
    {
      name: "Veg Crisp Burger",
      image_url:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 150",
      key: 1,
      type: "veg",
    },
    {
      name: "Cheese Burger",
      image_url:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 200",
      key: 2,
      type: "veg",
    },
    {
      name: "Chinese Noodles",
      image_url:
        "https://images.pexels.com/photos/2098135/pexels-photo-2098135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 350",
      key: 3,
      type: "veg",
    },
    {
      name: "India's Grill",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/0/18798800/e390c1d8f4df7d86b3787fe98ecd4427.jpg?fit=around|300:273&crop=300:273;*,*",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 450",
      key: 4,
      type: "non-veg",
    },
    {
      name: "Momos",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/3/18689923/fe92135685160e19b3a464a788876e45.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 350",
      key: 5,
      type: "veg",
    },
  ]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("restaurant")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setRestaurant(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <FlatList
        data={restaurant}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                key={index}
                activeOpacity={0.5}
                style={{ marginBottom: 2 }}
                onPress={() =>
                  navigation.navigate("ItemDetail", {
                    name: item.name,
                    image: item.image_url,
                    price: item.price,
                    type: item.type,
                    detail: item.detail,
                  })
                }
              >
                <View
                  key={index}
                  style={{
                    marginTop: 10,
                    // padding: 15,
                    backgroundColor: "white",
                    borderRadius: 15,
                    width: "95%",
                    marginHorizontal: "2.5%",
                  }}
                >
                  <RestaurantImage image={item.image_url} type={item.type} />
                  <RestaurantInfo
                    name={item.name}
                    price={item.price}
                    detail={item.detail}
                    type={item.type}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.5}
          style={{ marginBottom: 2 }}
          onPress={() => Alert.alert("alerttt")}
        >
          <View
            key={index}
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo
              name={restaurant.name}
              price={restaurant.price}
              rating={restaurant.rating}
            />
          </View>
        </TouchableOpacity>
      ))} */}
    </>
  );
}
