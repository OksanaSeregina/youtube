import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthItemComponent } from './auth-item';
import { FiltersComponent } from './filters';
import { HeaderComponent } from './header.component';
import { SearchFormComponent } from './search-form';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [
    AuthItemComponent,
    FiltersComponent,
    SearchFormComponent,
    HeaderComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
