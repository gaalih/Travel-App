import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = ({ state, descriptors, navigation }: any) => {
  return (
    <View className="w-full p-2 pt-4 px-7 flex flex-row justify-between">
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let icon: any;
        switch (label) {
          case "Home":
            icon = "home";
            break;
          case "Profile":
            icon = "user";
            break;
          case "Discover":
            icon = "flag";
            break;
          case "Settings":
            icon = "setting";
            break;
          default:
            icon = "";
            break;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <View className="flex flex-row justify-center">
              <AntDesign name={icon} size={28} color="black" />
            </View>
            <Text className="text-center lowercase text-[10px] tracking-wider">
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
