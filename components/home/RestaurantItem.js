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
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg",
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
      name: "Veg Classic Burger",
      image_url:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      categories: ["Cafe", "Bar"],
      price: "₹ 150",
      reviews: 1244,
      rating: 4.5,
      key: 1,
    },
    {
      name: "Cheese Burger",
      image_url:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg",
      categories: ["Cafe", "Bar"],
      price: "₹ 200",
      reviews: 1244,
      rating: 3.7,
      key: 2,
    },
    {
      name: "Chinese Noodles",
      image_url:
        "https://images.pexels.com/photos/2098135/pexels-photo-2098135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      categories: ["Indian", "Bar"],
      price: "₹ 350",
      reviews: 700,
      rating: 4.9,
      key: 3,
    },
    {
      name: "India's Grill",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/0/18798800/e390c1d8f4df7d86b3787fe98ecd4427.jpg?fit=around|300:273&crop=300:273;*,*",
      categories: ["Indian", "Bar"],
      price: "₹ 450",
      reviews: 700,
      rating: 4.9,
      key: 4,
    },
    {
      name: "Momos",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/3/18689923/fe92135685160e19b3a464a788876e45.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      categories: ["Cafe", "Bar"],
      price: "₹ 350",
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
            <View>
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
                    // padding: 15,
                    backgroundColor: "white",
                    borderRadius: 15,
                    width: "95%",
                    marginHorizontal: "2.5%",
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

const RestaurantImage = (props) => {
  const [heart, setHeart] = useState(false);

  const Heart = () => {
    return heart ? (
      <Entypo name="heart" size={30} color="#FF4242" />
    ) : (
      <Entypo name="heart-outlined" size={20} color="#fff" />
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
        style={{ position: "absolute", right: 10, top: 10 }}
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
      paddingHorizontal: 15,
      paddingBottom: 15,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.price}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#000",
        height: 25,
        width: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: "row",
      }}
    >
      <Text style={{ color: "#fff", alignItems: "center" }}>
        {props.rating}{" "}
      </Text>
      <FontAwesome name="star" size={10} color="#fff" />
    </View>
  </View>
);
