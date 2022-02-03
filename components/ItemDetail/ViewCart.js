import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = Number(total).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const addOrderToFirebase = () => {
    setModalVisible(false);
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted", {
            restaurantName: restaurantName,
            totalUSD: totalUSD,
            food: items,
          });
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      // backgroundColor: "red",
      flexDirection: "column",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
      flexDirection: "column",
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 19,
      marginBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
  });

  const checkoutModalContent = () => {
    console.log("in the modal Block");
    return (
      <>
        <View styles={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <View style={{ height: 300 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={
                  {
                    // backgroundColor: "red"
                  }
                }
              >
                {items.map((item, index) => (
                  <OrderItems key={index} item={item} />
                ))}
              </ScrollView>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalText}>{totalUSD}</Text>
            </View>
            <View
              style={{
                flexDirection: "column-reverse",
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: "center",
                    padding: 13,
                    borderRadius: 300,
                    position: "relative",
                    width: "80%",
                  }}
                  onPress={() => addOrderToFirebase()}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                  <Text
                    style={{
                      position: "absolute",
                      right: 20,
                      color: "white",
                      fontSize: 15,
                      top: 17,
                    }}
                  >
                    {total ? totalUSD : ""}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };

  console.log(totalUSD);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}

        {/* <View style={styles.modalContainer}></View> */}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            bottom: "2%",
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 90,
                  marginLeft: 10,
                }}
              >
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 17.5 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={5}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
