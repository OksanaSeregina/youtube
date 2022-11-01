import { IItem } from '../../../main';

/**
 * CardsState model
 */
export interface CardsState {
  /**
   * array from API cards
   */
  cards: ReadonlyArray<IItem>;

  /**
   * array from custom cards, that was added by user
   */
  custom: ReadonlyArray<IItem>;
}

/**
 * CardsState initial state
 */
export const initialCardsState: CardsState = {
  cards: [],
  custom: [],
};
