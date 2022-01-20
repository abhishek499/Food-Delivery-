import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from "../firebase";

export default function OrderCompleted({ route }) {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Tandoori Chicken",
        description:
          "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg",
        key: 1,
        restaurantName: "",
      },
    ],
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    console.log(lastOrder);

    return () => unsubscribe();
  }, []);

  //   console.log(lastOrder);
  return (
    <View style={{ marginTop: 25, backgroundColor: "#fff", flex: 1 }}>
      {/* green Checkmark */}
      <LottieView
        style={{
          height: 100,
          alignSelf: "center",
          marginBottom: 30,
          marginTop: 30,
        }}
        source={require("../assets/animations/success.json")}
        autoPlay
        speed={0.6}
        // loop={true}
      />
      <Text
        style={{
          marginTop: 25,
          fontSize: 20,
          alignSelf: "center",
          fontFamily: "Montserrat-Thin",
        }}
      >
        Your order is at {route.params.restaurantName} has been placed{" "}
        {route.params.totalUSD}.
      </Text>
      {/* menuOrder Listing/>*/}
      <View style={{ height: "35%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            restaurantName={route.params.name}
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
      </View>

      {/* cooking animation */}
      <LottieView
        // style={{ height: 200, alignSelf: "center" }}
        source={require("../assets/animations/loading.json")}
        autoPlay
        speed={0.6}
      />
    </View>
  );
}
