import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// import firebase from "firebase/app";
import "firebase/auth";

import colors from "../config/colors";

function ClickableTextBtn(props) {
  return (
    <TouchableOpacity onPress={props.pressFunction}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 15,
    padding: 20,
    backgroundColor: colors.fadedWhite,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ClickableTextBtn;
