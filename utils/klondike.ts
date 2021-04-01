import {
  ICard,
  IFlippableCard,
  IKlondikeGameState,
  KlondikeFoundations,
  KlondikeTableau,
} from "types";
import { getShuffledDeck } from "./cardUtils";

export const createKlondikeGameState = (): IKlondikeGameState => {
  const deck = getShuffledDeck();

  const tableau: KlondikeTableau = Array.from({ length: 8 }, (_, i) => i).map(
    (t) =>
      Array.from({ length: t }, (_, i) => i).map<IFlippableCard>((c) => {
        const card = deck.pop() as ICard;

        return { ...card, flipped: c !== t - 1 };
      })
  ) as KlondikeTableau;

  const foundations: KlondikeFoundations = [[], [], [], []];
  const waste: ICard[] = [];
  const stock = deck;

  const gameState = {
    foundations,
    stock,
    waste,
    tableau,
  };

  console.log(gameState);

  return gameState;
};
