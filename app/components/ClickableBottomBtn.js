import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// import firebase from "firebase/app";
import "firebase/auth";

import colors from "../config/colors";

function ClickableBottomBtn(props) {
  return (
    <TouchableOpacity onPress={props.pressFunction}>
      <View style={styles.aboutButton}>
        <Text style={styles.aboutButtonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aboutButton: {
    width: "50vw",
    padding: 10,
    backgroundColor: colors.fadedWhite,
    textAlign: "center",
  },
  aboutButtonText: {
    color: colors.white,
    textTransform: "uppercase",
  },
});

export default ClickableBottomBtn;
