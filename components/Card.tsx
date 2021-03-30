import React from "react";
import { View, Text } from "react-native";
import { ICard } from "types";
import { getNumberSymbol, getSuitSymbol } from "utils";

const classes = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100px",
    height: "150px",
    boxShadow: "2px 2px 7px -1px #000000",
    borderRadius: 5,
    background: "#FFFFFF",
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
  cardSymbol: { fontSize: 30 },
  bottomIconRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};

interface IProps {
  card: ICard;
  flipped?: boolean;
}

const Card = ({ card, flipped = false }: IProps) => {
  const suitSymbol = getSuitSymbol(card.suit);
  const numSymbol = getNumberSymbol(card.number);

  return (
    <View style={classes.card}>
      {!flipped && (
        <View style={classes.topIconRow}>
          <Text>{suitSymbol}</Text>
          <Text>{numSymbol}</Text>
        </View>
      )}
      <View style={classes.cardSymbolWrapper}>
        <Text style={classes.cardSymbol}>N</Text>
      </View>
      {!flipped && (
        <View style={classes.bottomIconRow}>
          <Text>{numSymbol}</Text>
          <Text>{suitSymbol}</Text>
        </View>
      )}
    </View>
  );
};

export default Card;
