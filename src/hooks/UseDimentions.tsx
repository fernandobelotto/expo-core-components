import { StatusBar } from "expo-status-bar";
import React from "react";
import { useWindowDimensions, SafeAreaView, View, Text } from "react-native";

export default function UseDimentions() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <SafeAreaView>
        <View style={{ height, backgroundColor: "lightblue", width }}>
          <Text>height {height}</Text>
          <Text>width {width}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
