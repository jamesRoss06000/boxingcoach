import React from "react";
import { View, StyleSheet, Text, ImageBackground, Linking } from "react-native";
// import { StripeProvider } from "@stripe/stripe-react-native";

import headerStyles from "../config/headerStyles";
import colors from "../config/colors";

function PurchasePage(props) {
  const createUser = (email, password) => {
    try {
      // AFTER PAYMENT CONFIRMED
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      paymentError();
      console.log(error);
    }
  };

  const paymentError = (error) => {
    Alert.alert(error);
    console.log(error);
  };

  return (
    // <StripeProvider
    //   publishableKey={publishableKey}
    //   merchantIdentifier="merchant.identifier"
    // >
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/pexels-ivan-samkov-b&w.jpg")}
    >
      <View style={styles.container}>
        <View style={headerStyles.header}>
          <Text style={headerStyles.smallTitle}>PURCHASE FULL ACCESS</Text>
        </View>

        <View style={styles.bodyView}></View>
      </View>
    </ImageBackground>
    // </StripeProvider>
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
  bodyView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bodyText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default PurchasePage;
