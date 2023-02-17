import React from "react";
import { Login } from "./views/login";
import { SignUp } from "./views/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./views/home";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{ headerStyle: { backgroundColor: "#F5F5F5" } }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: " " }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: " " }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: " ", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
