import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      map((value: boolean) => {
        if (!value) {
          this.router.navigate(['auth']);
          return false;
        }
        return true;
      })
    );
  }
}
