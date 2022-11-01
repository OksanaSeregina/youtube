import { createAction, props } from '@ngrx/store';
import { IItem } from '../../../main';

export const loadCards = createAction('[App] LoadCards');
export const loadCardsSuccess = createAction(
  '[App] LoadCardsSuccess',
  props<{ cards: IItem[] }>()
);

export const searchCards = createAction(
  '[App] SearchCards',
  props<{ value: string }>()
);

export const addCard = createAction('[App] AddCard', props<{ card }>());
export const addCardSuccess = createAction(
  '[App] AddCardSuccess',
  props<{ card }>()
);
