import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { SortByDatePipe } from './sort-by-date.pipe';
import { SortByViewPipe } from './sort-by-view.pipe';

@NgModule({
  declarations: [FilterPipe, SortByDatePipe, SortByViewPipe],
  exports: [FilterPipe, SortByDatePipe, SortByViewPipe],
})
export class PipesModule {}
