import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./Login";
import SignUp from "./SignUp";

const Tab = createMaterialTopTabNavigator();

export default function LoginTabs() {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#eee",
      borderWidth: 0,
      //   marginTop: 50,
      zIndex: 0,
    },
  };
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={screenOptions}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  );
}
