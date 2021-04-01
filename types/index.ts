export type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type CardSuit = "H" | "S" | "C" | "D";

export interface ICard {
  suit: CardSuit;
  number: CardNumber;
}

export interface IFlippableCard extends ICard {
  flipped: boolean;
}

export * from "./klondike";
