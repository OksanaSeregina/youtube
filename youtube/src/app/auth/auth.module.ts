import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [FormsModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
