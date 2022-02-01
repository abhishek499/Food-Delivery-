import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import OrderHistory from "../../screens/OrderHistory";
import ChangeAddress from "./ChangeAddress";

export default function Checkout() {
  const [available, setAvailable] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    console.log(modalVisible);
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ChangeAddress modal={closeModal} />
      </Modal>
      <View
        style={{
          backgroundColor: "#fff",
          height: 150,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {!available ? (
          <View style={{ alignItems: "center", paddingVertical: 20 }}>
            <Text style={{ fontFamily: "Product-Sans-Bold" }}>
              2 Item(s) Unavailable
            </Text>
            <Text style={{ fontFamily: "Product-Sans-Regular" }}>
              Sorry! few items are out of stock.
            </Text>
            <TouchableOpacity
              style={{
                marginTop: "5%",
                width: "80%",
                height: 50,
                backgroundColor: "#000",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "Product-Sans-Bold" }}>
                Remove Unavailable Items
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View
              style={{
                paddingTop: 20,
                marginHorizontal: "5%",
                paddingBottom: 7,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ fontFamily: "Product-Sans-Bold", fontSize: 18 }}
                  >
                    Deliver to Work | 24MINS
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Product-Sans-Bold",
                      fontSize: 14,
                      color: "#6c757d",
                    }}
                  >
                    Marketonic, SN Tower
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 70,
                    flexDirection: "row",
                    borderRadius: 15,
                    justifyContent: "space-between",
                    alignItems: "center",
                    // borderWidth: 1,
                    // paddingHorizontal: 8,
                    borderColor: "#ff9595",
                    backgroundColor: "#ffe0e0",
                  }}
                  onPress={() => {
                    setModalVisible(true);
                    console.log(modalVisible);
                  }}
                >
                  <Image
                    source={require("../../assets/images/homepage.png")}
                    style={{
                      height: 20,
                      width: 20,
                      marginLeft: 10,
                      tintColor: "#ff4949",
                    }}
                  />
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={28}
                    color="#ff4949"
                    style={{ marginRight: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "90%",
                height: 10,
                borderBottomWidth: 1,
                borderStyle: "dashed",
                borderRadius: 1,
                borderBottomColor: "#6c757d",
                marginHorizontal: "5%",
              }}
            />
            <View
              style={{
                paddingTop: 10,
                marginHorizontal: "5%",
                paddingBottom: 7,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 18 }}>
                  ₹ 472
                </Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text
                    style={{
                      color: "#229c30",
                      fontFamily: "Product-Sans-Bold",
                      fontSize: 13,
                    }}
                  >
                    View Detailed Bill
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#229c30",
                  height: 50,
                  width: "50%",
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Product-Sans-Bold",
                    fontSize: 20,
                    color: "#fff",
                  }}
                >
                  Proceed To Pay
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );
}
