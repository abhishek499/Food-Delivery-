import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://images.pexels.com/photos/8796707/pexels-photo-8796707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const title = "FarmHouse Kitchen Thai Cuisine";
const description = "Thai • Comfort Food • $$ •  🎟  • 4 ⭐ (2913+)";

export default function About(props) {
  const { name, image, categories, price, reviews, rating } =
    props.route.route.params;

  const formattedCategories = categories.map((cat) => cat).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } •  🎟  • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 300 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
      fontFamily: "Product-Sans-Bold",
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
      fontFamily: "Product-Sans-Regular",
    }}
  >
    {props.description}
  </Text>
);
