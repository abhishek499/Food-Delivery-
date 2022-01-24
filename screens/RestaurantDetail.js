import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 1,
    restaurantName: "",
  },
  {
    title: "Murg Kebab",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$11.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 2,
  },
  {
    title: "Sahi Paneer",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$12.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 3,
  },
  {
    title: "Murg Masala",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$16.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 4,
  },
  {
    title: "Kauua Biryani",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$14.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 5,
  },
  {
    title: "Chicken Biryani",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$29.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 6,
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
    key: 7,
  },
];

export default function RestaurantDetail({ route, navigation }) {
  // console.log(route);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={{ route }} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems
          restaurantName={route.params.name}
          foods={foods}
          hideCheckbox={false}
          marginLeft={0}
        />
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <ViewCart navigation={navigation} />
    </View>
  );
}
