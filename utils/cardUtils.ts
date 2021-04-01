import { CardNumber, CardSuit, ICard } from "types";

const getCardDeck = (): ICard[] => {
  const deck: ICard[] = [];

  for (let suit in ["H", "S", "D", "C"]) {
    for (let number = 1; number <= 13; number++) {
      deck.push({
        number: number as CardNumber,
        suit: suit as CardSuit,
      });
    }
  }

  return deck;
};

const shuffleDeck = (deck: ICard[]): ICard[] => {
  return deck.sort(() => Math.random() - 0.5);
};

const getShuffledDeck = () => {
  return shuffleDeck(getCardDeck());
};

const NUMBER_SYMBOLS: { [number: number]: string } = {
  1: "A",
  11: "J",
  12: "Q",
  13: "K",
};

const getNumberSymbol = (number: CardNumber): string => {
  if (number in NUMBER_SYMBOLS) return NUMBER_SYMBOLS[number];

  return number.toString();
};

const getSuitSymbol = (suit: CardSuit): string => {
  if (suit === "C") return "♣";
  if (suit === "D") return "♦";
  if (suit === "H") return "♥";
  if (suit === "S") return "♠";
  return "";
};

const getSuitColor = (suit: CardSuit): string => {
  if (suit === "C" || suit === "S") return "#000";
  if (suit === "H" || suit === "D") return "#a82005";
  return "#000";
};

export {
  getCardDeck,
  shuffleDeck,
  getShuffledDeck,
  getNumberSymbol,
  getSuitSymbol,
  getSuitColor,
};
