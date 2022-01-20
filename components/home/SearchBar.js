import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View
      style={{
        marginTop: "5%",
        width: "100%",
        // height: "45%",
        marginRight: "0%",
        flexDirection: "row",
        // backgroundColor: "yellow",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: "1%",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            marginRight: "1%",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10, marginTop: 13 }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Gps is Pressed", "App is in dev phase")
              }
            >
              <MaterialIcons name="gps-fixed" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 4,
              margin: 5,
              backgroundColor: "white",
              height: 40,
              width: 40,
              padding: 12,
              borderRadius: 33,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Search is Pressed", "App is in dev phase")
              }
            >
              <AntDesign name="search1" size={15} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => Alert.alert("filter is Pressed", "App is in dev phase")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#eee",
          borderRadius: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
