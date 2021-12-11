import React from 'react';
import { View, StyleSheet } from "react-native";

import { Card } from "../Card";

const cards = [
  {
    source: require("../../assets/death.png"),
  },
  {
    source: require("../../assets/chariot.png"),
  },
  {
    source: require("../../assets/high-priestess.png"),
  },
  {
    source: require("../../assets/justice.png"),
  },
  {
    source: require("../../assets/lover.png"),
  },
  {
    source: require("../../assets/pendu.png"),
  },
  {
    source: require("../../assets/tower.png"),
  },
  {
    source: require("../../assets/strength.png"),
  },
];

export const assets = cards.map((card) => card.source);

export const Tarot = () => {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});