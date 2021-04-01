import React from "react";
import { Card } from "components";
import { ICard } from "types";
import { ViewStyle } from "react-native";

const styles: { [className: string]: ViewStyle } = {
  stack: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    marginTop: "-100%",
  },
};

interface IProps {
  cards: ICard[];
  style?: ViewStyle;
}

const Stack = ({ cards, style }: IProps) => {
  return (
    <div>
      {cards.map((card, i) => (
        <Card card={card} style={{ ...styles.card, ...style }} key={i} />
      ))}
    </div>
  );
};

export default Stack;
