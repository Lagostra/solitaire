import React from "react";
import { View, Text, ViewStyle, TextStyle, StyleSheet } from "react-native";
import { ICard } from "types";
import { getNumberSymbol, getSuitColor, getSuitSymbol } from "utils";

const classes = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100px",
    height: "150px",
    borderColor: "#BBB",
    borderWidth: 1,
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: "#FFF",
    padding: 10,
  },
  topIconRow: {
    display: "flex",
    flexDirection: "row",
  },
  cardSymbolWrapper: {
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardSymbol: { fontSize: 40 },
  bottomIconRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};

interface IProps {
  card: ICard;
  flipped?: boolean;
  style?: ViewStyle;
}

const Card = ({ card, flipped = false, style = {} }: IProps) => {
  const suitSymbol = getSuitSymbol(card.suit);
  const numSymbol = getNumberSymbol(card.number);
  const color = getSuitColor(card.suit);

  return (
    <View style={{ ...classes.card, ...style }}>
      {!flipped && (
        <View style={classes.topIconRow}>
          <Text style={{ color }}>{suitSymbol}</Text>
          <Text style={{ color }}>{numSymbol}</Text>
        </View>
      )}
      <View style={classes.cardSymbolWrapper}>
        <Text style={{ ...classes.cardSymbol, color }}>N</Text>
      </View>
      {!flipped && (
        <View style={classes.bottomIconRow}>
          <Text style={{ color }}>{numSymbol}</Text>
          <Text style={{ color }}>{suitSymbol}</Text>
        </View>
      )}
    </View>
  );
};

export default Card;
