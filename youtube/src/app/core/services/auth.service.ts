import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

const MOCK_TOKEN = '565dfgwstg';

@Injectable()
export class AuthService {
  private subject: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isAuthenticated()
  );
  public isAuthenticated$: Observable<boolean> = this.subject.asObservable();

  constructor(private storageService: StorageService) {}

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
