import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../core';
import { loginValidator, passwordValidator } from './validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public login: AbstractControl;
  public password: AbstractControl;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: this.fb.control('', {
        validators: [Validators.required, loginValidator()],
      }),
      password: this.fb.control('', {
        validators: [Validators.required, passwordValidator()],
      }),
    });

    this.login = this.form.get('login');
    this.password = this.form.get('password');
  }

  public onSubmit(): void {
    const { login, password } = this.form.getRawValue();
    console.log(this.login);
    this.authService.set({ login, password });
  }
}
