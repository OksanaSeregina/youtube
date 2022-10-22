import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../core';

@Component({
  selector: 'app-auth-item',
  templateUrl: './auth-item.component.html',
  styleUrls: ['./auth-item.component.scss'],
})
export class AuthItemComponent implements OnInit {
  public isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$.pipe(
      tap((value: boolean) => {
        if (value) {
          this.router.navigate(['/catalog']);
        }
      })
    );
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
