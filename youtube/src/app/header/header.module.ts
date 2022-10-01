import { NgModule } from '@angular/core';
import { AuthComponent } from './auth';
import { FiltersComponent } from './filters';
import { HeaderComponent } from './header.component';
import { SearchFormComponent } from './search-form';

@NgModule({
  declarations: [
    AuthComponent,
    FiltersComponent,
    SearchFormComponent,
    HeaderComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
