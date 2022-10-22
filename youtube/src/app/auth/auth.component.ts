import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  public onSubmit(auth: NgForm): void {
    const { login, password } = auth.form.value;
    this.authService.set({ login, password });
  }
}
