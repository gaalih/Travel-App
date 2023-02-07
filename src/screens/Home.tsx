import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Fontisto } from "@expo/vector-icons";

const Home = () => {
  const Navigation = useNavigation();
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      className="relative bg-slate-50 flex-1"
    >
      <View>
        <Animatable.View
          className="px-5 pt-7 flex flex-row gap-1"
          animation="pulse"
          easing="ease-in-out"
        >
          <View className="self-center">
            <MaterialCommunityIcons name="compass" size={25} color="#65a30d" />
          </View>
          <Text className="text-lime-600 self-center font-semibold tracking-widest text-lg">
            TravelApp
          </Text>
        </Animatable.View>
        <View className="px-10 flex flex-col mt-2 gap-2">
          <Animatable.Text
            className="text-slate-700 self- text-left font-semibold tracking-widest text-lg"
            animation="fadeInLeft"
          >
            Enjoy the trip with
          </Animatable.Text>
          <Animatable.Text
            className="text-lime-600 text-left font-semibold tracking-widest text-3xl"
            animation="fadeInLeft"
          >
            Good Moments
          </Animatable.Text>
          <Animatable.Text
            className="text-slate-500 font-semibold text-xs tracking-tight text-justify"
            animation="fadeInRight"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus ipsa deserunt, fuga quas eos ab commodi animi maiores
          </Animatable.Text>
        </View>
      </View>
      <Animatable.View
        className="absolute -bottom-32 -right-16 rotate-12"
        animation="fadeInUp"
      >
        <Fontisto
          name="compass-alt"
          size={500}
          color="#65a30d"
          style={{ opacity: 0.5 }}
        />
      </Animatable.View>
      <View className="absolute z-50 self-center bottom-10 bg-transparent">
        <TouchableOpacity
          className="bg-transparent"
          onPress={() => Navigation.navigate("Discover")}
        >
          <Animatable.View
            className=" bg-teal-400 backdrop-blur-lg text-slate-800 p-7 rounded-full shadow-xl shadow-cyan-700"
            animation="pulse"
            easing="ease-in-out"
            iterationCount={"infinite"}
          >
            <Text className="bg-transparent text-2xl font-extrabold text-slate-50">
              GO
            </Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      StatusBar.currentHeight !== undefined
        ? StatusBar.currentHeight + 10
        : StatusBar.currentHeight,
  },
});
export default Home;
