import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header';
import { MainModule } from './main';
import { NotFoundComponent } from './not-found';
import { AppStoreModule, GuardsModule, InterceptorsModule } from './core';
import { AuthModule } from './auth';
import { AdminModule } from './admin';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    InterceptorsModule,
    HeaderModule,
    MainModule,
    GuardsModule,
    AuthModule,
    AdminModule,
    AppStoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
