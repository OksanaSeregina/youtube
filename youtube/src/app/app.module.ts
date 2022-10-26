import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header';
import { MainModule } from './main';
import { NotFoundComponent } from './not-found';
import { GuardsModule, InterceptorsModule } from './core';
import { AuthModule } from './auth';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    InterceptorsModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    GuardsModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
