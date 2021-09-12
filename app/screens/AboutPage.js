import React from "react";
import { View, StyleSheet, Text, ImageBackground, Linking } from "react-native";

import headerStyles from "../config/headerStyles";
import colors from "../config/colors";

function AboutPage(props) {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/pexels-ivan-samkov-b&w.jpg")}
    >
      <View style={styles.container}>
        <View style={headerStyles.header}>
          <Text style={headerStyles.smallTitle}>USE / ABOUT</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Use for shadow boxing and punch-bag training
          </Text>
          <Text style={styles.buttonText}>
            Boxing Coach calls out punch numbers, then boxer throws punches
            called
          </Text>
          <Text style={styles.buttonText}>
            Focus on reaction time, speed and technique
          </Text>
          <Text style={styles.buttonText}>
            Punches :{"\n"}1 = Jab{"\n"}2 = Straight/Cross{"\n"}3 = Lead Hook
            {"\n"}4 = Rear Hook{"\n"}5 = Lead Uppercut{"\n"}6 = Rear Uppercut
          </Text>
          <Text
            style={[styles.buttonText, { color: "dodgerblue" }]}
            onPress={() => Linking.openURL("https://youtu.be/o9qPlLLGv6k?t=80")}
          >
            Numbers/punches explained in detail
          </Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Developed by James Ross</Text>
          <Text
            style={styles.buttonText}
            onPress={() =>
              Linking.openURL("https://www.pexels.com/@ivan-samkov")
            }
          >
            Background image by
            <Text style={{ color: "dodgerblue" }}> Ivan Samkov</Text>
          </Text>
          <Text style={styles.buttonText}>Boxing Coach © 2021</Text>
          <Text style={styles.buttonText}>All Rights Reserved</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 15,
    padding: 20,
    backgroundColor: colors.fadedWhite,
    borderRadius: 5,
    alignItems: "flex-start",
  },
  buttonText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
});

export default AboutPage;
