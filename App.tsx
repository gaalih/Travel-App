import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Discover from "./src/screens/Discover";
import Profile from "./src/screens/Profile";

type RootStackParamList = {
  Home: undefined;
  Discover: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

// const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Discover" component={Discover} />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          // initialParams={{ userId: user.id }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
