import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = async () => {
    if (password === password2) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <KeyboardAvoidingView style={{ marginTop: 20, flex: 1 }}>
      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <Text style={{ fontFamily: "Lobster-Regular", fontSize: 35 }}>
          Sign Up
        </Text>
        <View style={{ marginTop: "40%", width: "100%" }}>
          <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 25 }}>
            Create Account
          </Text>
        </View>
        <View
          style={{
            paddingVertical: "8%",
          }}
        >
          <TextInput
            style={{
              borderWidth: 1.8,
              height: 43,
              borderRadius: 20,
              fontFamily: "Product-Sans-Italic",
              fontSize: 15,
              paddingHorizontal: 20,
            }}
            placeholder="Username or Email"
            onChangeText={(email) => setEmail(email.trim())}
            textAlignVertical="center"
          />

          <TextInput
            style={{
              marginTop: "8%",
              borderWidth: 1.8,
              height: 43,
              borderRadius: 20,
              fontFamily: "Product-Sans-Italic",
              fontSize: 15,
              paddingHorizontal: 20,
            }}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            textAlignVertical="center"
            secureTextEntry={true}
          />
          <TextInput
            style={{
              marginTop: "8%",
              borderWidth: 1.8,
              height: 43,
              borderRadius: 20,
              fontFamily: "Product-Sans-Italic",
              fontSize: 15,
              paddingHorizontal: 20,
            }}
            placeholder="Re-enter password"
            onChangeText={(text) => setPassword2(text)}
            textAlignVertical="center"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            // marginTop: 30,
            backgroundColor: "#000",
            height: 43,
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 20,
            flexDirection: "row",
          }}
          onPress={handleSignUp}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
            }}
          >
            Sign up
          </Text>
          <AntDesign
            name="arrowright"
            size={16}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold-Italic",
            marginTop: 50,
            alignSelf: "center",
          }}
        >
          alternatively use
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: 100,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",

              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <AntDesign name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",

              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Image
              source={require("../assets/images/meta.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
