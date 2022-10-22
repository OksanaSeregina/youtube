import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { StorageService } from './storage.service';

const MOCK_TOKEN = '565dfgwstg';

@Injectable()
export class AuthService {
  private subject: Subject<boolean> = new Subject();
  public isAuthenticated$: Observable<boolean>;

  constructor(private storageService: StorageService, private router: Router) {
    this.isAuthenticated$ = this.subject
      .asObservable()
      .pipe(startWith(this.isAuthenticated()));
  }

  public set({ login, password }: { login: string; password: string }): void {
    const isValid = login && password;
    if (isValid) {
      this.storageService.set('token', MOCK_TOKEN);
      this.subject.next(true);
    }
  }

  public logout(): void {
    this.storageService.set('token', undefined);
    this.subject.next(false);
  }

  private isAuthenticated(): boolean {
    const token = this.storageService.get('token');
    return token === MOCK_TOKEN;
  }
}
