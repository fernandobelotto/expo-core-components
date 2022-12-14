import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function MyImageBackground() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
