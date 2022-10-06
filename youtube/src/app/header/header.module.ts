import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth';
import { FiltersComponent } from './filters';
import { HeaderComponent } from './header.component';
import { SearchFormComponent } from './search-form';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AuthComponent,
    FiltersComponent,
    SearchFormComponent,
    HeaderComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
