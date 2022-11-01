import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DataService } from '../../services';
import * as CardsActions from './cards.action';
import { IItem } from '../../../main';

@Injectable()
export class CardsEffect {
  public loadCards$: Observable<Action>;
  public searchCards$: Observable<Action>;
  public addCard$: Observable<Action>;

  constructor(private actions$: Actions, private dataService: DataService) {
    this.loadCards$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CardsActions.loadCards),
        switchMap(() => this.getCards())
      )
    );

    this.searchCards$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CardsActions.searchCards),
        switchMap(({ value }) => this.getCards(value))
      )
    );

    this.addCard$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CardsActions.addCard),
        switchMap(({ card }) => of(CardsActions.addCardSuccess({ card })))
      )
    );
  }

  private getCards(value: string = ''): Observable<Action> {
    return this.dataService.get(value).pipe(
      map((cards: IItem[]) => CardsActions.loadCardsSuccess({ cards })),
      catchError(() => [])
    );
  }
}
