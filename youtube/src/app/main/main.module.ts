import { NgModule } from '@angular/core';
import { CardComponent } from './card';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [CardComponent, MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
