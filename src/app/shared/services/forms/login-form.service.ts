import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  resetForm(): void {
    this.loginForm.reset();
  }
}
