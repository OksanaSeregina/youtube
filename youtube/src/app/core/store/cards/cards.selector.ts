import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CardsState } from './cards.state';

/**
 * Cards state selector
 */
export const selectCardsState = createFeatureSelector<CardsState>('cards');

/**
 * Cards state data selector
 */
export const selectCardsData = createSelector(
  selectCardsState,
  (state: CardsState) => state.cards
);

/**
 * Custom cards state data selector
 */
export const selectCustomData = createSelector(
  selectCardsState,
  (state: CardsState) => state.custom
);
