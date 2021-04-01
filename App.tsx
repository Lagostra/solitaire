import { Card, Stack, StackGroup } from "components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StackGroup
        cardGroups={[
          [
            { number: 1, suit: "H" },
            { number: 2, suit: "C" },
            { number: 3, suit: "S" },
            { number: 4, suit: "D" },
          ],
          [
            { number: 1, suit: "H" },
            { number: 2, suit: "H" },
            { number: 3, suit: "H" },
            { number: 4, suit: "H" },
          ],
          [
            { number: 1, suit: "H" },
            { number: 2, suit: "H" },
            { number: 3, suit: "H" },
            { number: 4, suit: "H" },
          ],
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
