import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth';
import { NotFoundComponent } from './not-found';
import { DetailsComponent, MainComponent } from './main';
import { AuthGuard } from './core';
import { AdminComponent } from './admin';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full',
      },
      { path: 'catalog', component: MainComponent },
      {
        path: 'catalog/:id',
        component: DetailsComponent,
      },
      { path: 'admin', component: AdminComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
