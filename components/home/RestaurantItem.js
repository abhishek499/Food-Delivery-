import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "../../firebase";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
    key: 5,
  },
];

export default function RestaurantItem({ navigation, ...props }) {
  const [restaurant, setRestaurant] = useState([
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
      key: 1,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
      key: 2,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      key: 3,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      key: 4,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
      key: 5,
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

    console.log(restaurant);

    return () => unsubscribe();
  }, []);

  return (
    <>
      <FlatList
        style={
          {
            //  height: 10000,
            // backgroundColor: "yellow",
          }
        }
        data={restaurant}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.key}
              activeOpacity={0.5}
              style={{ marginBottom: 2 }}
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  name: item.name,
                  image: item.image_url,
                  categories: item.categories,
                  price: item.price,
                  reviews: item.reviews,
                  rating: item.rating,
                })
              }
            >
              <View
                key={item.key}
                style={{
                  marginTop: 10,
                  padding: 15,
                  backgroundColor: "white",
                }}
              >
                <RestaurantImage image={item.image_url} />
                <RestaurantInfo
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                />
              </View>
            </TouchableOpacity>
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

const RestaurantImage = (props) => {
  const [heart, setHeart] = useState(false);

  const Heart = () => {
    return heart ? (
      <Entypo name="heart" size={24} color="#FF4242" />
    ) : (
      <Entypo name="heart-outlined" size={24} color="#fff" />
    );
  };

  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180, borderRadius: 10 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 20 }}
        onPress={() => (heart ? setHeart(false) : setHeart(true))}
      >
        <Heart />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.price}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#000",
        height: 30,
        width: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: "row",
      }}
    >
      <Text style={{ color: "#fff", alignItems: "center" }}>
        {props.rating}{" "}
      </Text>
      <FontAwesome name="star" size={15} color="#fff" />
    </View>
  </View>
);
