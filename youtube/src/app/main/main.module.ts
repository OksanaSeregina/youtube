import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardBorderColorDirective, CardComponent } from './card';
import { MainComponent } from './main.component';
import { ServicesModule } from '../core';
import { PipesModule } from './pipes';
import { DetailsComponent } from './details';

@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    MainComponent,
    CardBorderColorDirective,
  ],
  imports: [BrowserModule, CommonModule, ServicesModule, PipesModule],
  exports: [MainComponent],
})
export class MainModule {}
