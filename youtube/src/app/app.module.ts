import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header';
import { MainModule } from './main';
import { NotFoundComponent } from './not-found';
import { AuthComponent } from './auth';
import { DetailsComponent } from './details';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, MainModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
