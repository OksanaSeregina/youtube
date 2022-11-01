import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cardsReducer } from './cards.reducer';
import { CardsEffect } from './cards.effect';
import { CardsFacade } from './cards.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cards', cardsReducer),
    EffectsModule.forFeature([CardsEffect]),
  ],
  providers: [CardsFacade],
})
export class CardsStoreModule {}
