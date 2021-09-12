import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import colors from "./colors";

function logoTitle() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Boxing Coach</Text>
      <FontAwesomeIcon icon={faBell} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
    marginRight: 10,
  },
});

export default logoTitle;
