import React from "react";
import { View, StyleSheet } from "react-native";
import { IKlondikeGameState } from "types";
import { Stack, StackGroup } from "components";

const style = StyleSheet.create({
  board: {
    display: "flex",
    flexDirection: "column",
  },
});

interface IProps {
  gameState: IKlondikeGameState;
}

const KlondikeBoard = ({ gameState }: IProps) => {
  return (
    <View style={style.board}>
      <View>
        <StackGroup cardGroups={gameState.foundations} />
      </View>
      <View>
        <Stack cards={gameState.stock} />
        <Stack cards={gameState.waste} />
      </View>
      <View>
        <StackGroup cardGroups={gameState.tableau} />
      </View>
    </View>
  );
};

export default KlondikeBoard;
