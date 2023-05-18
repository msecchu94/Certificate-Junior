import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFrm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginFrm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  login(loginFrm: any) {}
}
