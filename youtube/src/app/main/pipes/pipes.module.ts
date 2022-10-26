import { NgModule } from '@angular/core';
import { SortByDatePipe } from './sort-by-date.pipe';
import { SortByViewPipe } from './sort-by-view.pipe';

@NgModule({
  declarations: [SortByDatePipe, SortByViewPipe],
  exports: [SortByDatePipe, SortByViewPipe],
})
export class PipesModule {}
