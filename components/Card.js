import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  //To overwrite the card styles from other components, cause not all cards use the same styling as stated here
  //Now like this we can merge the styles set in other components
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, //Android requires elevation to add shadow effect
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
