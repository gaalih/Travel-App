import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      className="relative bg-slate-50 flex-1"
    >
      <View>
        <Text>Hello from discover</Text>
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

export default Discover;
