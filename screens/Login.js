import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <KeyboardAvoidingView style={{ marginTop: 20, flex: 1 }}>
      <View style={{ marginHorizontal: 35, marginTop: 50 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={{ fontFamily: "Lobster-Regular", fontSize: 35 }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 30, marginTop: 10 }}>
            <Text style={{ fontFamily: "Lobster-Regular", fontSize: 20 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "50%", width: "100%" }}>
          <Text style={{ fontFamily: "Product-Sans-Bold", fontSize: 25 }}>
            Welcome back,
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
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
            placeholder="Username"
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
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            textAlignVertical="center"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#000",
            height: 43,
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 20,
            flexDirection: "row",
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
            }}
          >
            Log in
          </Text>
          <AntDesign
            name="arrowright"
            size={16}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleSignUp}
          style={{
            marginTop: 30,
            backgroundColor: "#000",
            height: 43,
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
            }}
          >
            Register
          </Text>
          <AntDesign
            name="arrowright"
            size={16}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity> */}
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
