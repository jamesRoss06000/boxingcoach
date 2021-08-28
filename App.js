import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HomePage from "./app/screens/HomePage";

export default function App() {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./app/assets/pexels-ivan-samkov-b&w.jpg")}
    >
      <HomePage />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
