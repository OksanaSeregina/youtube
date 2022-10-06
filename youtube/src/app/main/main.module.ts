import { NgModule } from '@angular/core';
import { CardBorderColorDirective, CardComponent } from './card';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../core';
import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [CardComponent, MainComponent, CardBorderColorDirective],
  imports: [BrowserModule, CommonModule, ServicesModule, PipesModule],
  exports: [MainComponent],
})
export class MainModule {}
