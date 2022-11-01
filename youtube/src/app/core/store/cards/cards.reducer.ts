import { Action, createReducer, on } from '@ngrx/store';
import * as CardsActions from './cards.action';
import { CardsState, initialCardsState } from './cards.state';

const reducers = createReducer(
  initialCardsState,
  on(CardsActions.loadCardsSuccess, (state, { cards }) => ({
    ...state,
    cards,
  })),
  on(CardsActions.addCardSuccess, (state, { card }) => ({
    ...state,
    custom: [...state.custom, card],
  }))
);

export function cardsReducer(state: CardsState, action: Action) {
  return reducers(state, action);
}
