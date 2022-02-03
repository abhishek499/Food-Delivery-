import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import ItemDetail from "./screens/ItemDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import OrderHistory from "./screens/OrderHistory";
import Browse from "./screens/Browse";
import Cart from "./screens/Cart";
import Account from "./screens/Account";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"ItemDetail"} component={ItemDetail} />
          <Stack.Screen name={"OrderCompleted"} component={OrderCompleted} />
          <Stack.Screen name={"OrderHistory"} component={OrderHistory} />
          <Stack.Screen name={"Browse"} component={Browse} />
          <Stack.Screen name={"Cart"} component={Cart} />
          <Stack.Screen name={"Account"} component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
