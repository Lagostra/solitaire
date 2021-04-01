import { ICard, IFlippableCard } from "types";

export type KlondikeTableau = [
  IFlippableCard[],
  IFlippableCard[],
  IFlippableCard[],
  IFlippableCard[],
  IFlippableCard[],
  IFlippableCard[],
  IFlippableCard[]
];
export type KlondikeFoundations = [ICard[], ICard[], ICard[], ICard[]];
export interface IKlondikeGameState {
  tableau: KlondikeTableau;
  foundations: KlondikeFoundations;
  stock: ICard[];
  waste: ICard[];
}
