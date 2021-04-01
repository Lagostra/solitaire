import { Card, KlondikeBoard, Stack, StackGroup } from "components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createKlondikeGameState } from "utils";

export default function App() {
  const gameState = createKlondikeGameState();
  return <KlondikeBoard gameState={gameState} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
