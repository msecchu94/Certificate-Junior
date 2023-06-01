import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { login } from '../../../presentation/store/actions/auth.actions';
import { authReducer } from '../../../presentation/store/reducers/auth.reducers';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/presentation/store/state/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  loginFrm: FormGroup;
  user:any;

  constructor(private store: Store, private fb: FormBuilder) {
    this.loginFrm = this.fb.group({ 
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(loginFrm: any) {
    this.store.dispatch(login({username: loginFrm.value.email, password: loginFrm.value.password}));
  }
}
