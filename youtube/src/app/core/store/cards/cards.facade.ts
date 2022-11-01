import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import {
  filter,
  publishReplay,
  refCount,
  startWith,
  map,
} from 'rxjs/operators';
import * as CardsActions from './cards.action';
import { AppState } from '../app.state';
import { IItem } from '../../../main';
import { selectCardsData, selectCustomData } from './cards.selector';

@Injectable()
export class CardsFacade {
  public cards$: Observable<ReadonlyArray<IItem>>;
  public custom$: Observable<ReadonlyArray<IItem>>;
  public combinedCards$: Observable<ReadonlyArray<IItem>>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.pipe(select(selectCardsData)).pipe(
      filter((value) => !!value?.length),
      publishReplay(1),
      refCount()
    );

    this.custom$ = this.store.pipe(select(selectCustomData)).pipe(
      filter((value) => !!value?.length),
      publishReplay(1),
      refCount()
    );

    this.combinedCards$ = combineLatest([
      this.cards$,
      this.custom$.pipe(startWith([])),
    ]).pipe(
      map(([cards, custom]) => [...cards, ...custom]),
      publishReplay(1),
      refCount()
    );
  }

  public loadCards(): void {
    this.store.dispatch(CardsActions.loadCards());
  }

  public searchCards(value: string): void {
    this.store.dispatch(CardsActions.searchCards({ value }));
  }

  public addCard(card): void {
    this.store.dispatch(CardsActions.addCard({ card }));
  }
}
