import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { Stack } from "components";
import { ICard } from "types";

const classes: { [className: string]: ViewStyle } = {
  stackGroup: {
    display: "flex",
    flexDirection: "row",
  },
  stack: {
    marginLeft: "20px",
  },
};

interface IProps {
  cardGroups: ICard[][];
}

const StackGroup = ({ cardGroups }: IProps) => {
  return (
    <View style={classes.stackGroup}>
      {cardGroups.map((cards, i) => (
        <Stack cards={cards} style={classes.stack} key={i} />
      ))}
    </View>
  );
};

export default StackGroup;
