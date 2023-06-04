import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { login } from '../../../presentation/store/actions/auth.actions';
import { AuthState } from 'src/presentation/store/state/auth.state';
import { selectError, selectIsLoading, selectUser } from 'src/presentation/store/selectors/auth.selectors';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';
import { LoginFormService } from 'src/app/shared/services/forms/login-form.service';
import { MESSAGE_LOGIN_FORM_INVALID, MESSAGE_LOGIN_SUCCESS, SNACKBAR_ACTION_TYPE_DISMISS } from 'src/app/shared/utils/constants/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit{
  user:any;
  isLoading: boolean = false;
  error: string | null = '';

  constructor(private _store: Store<AuthState>, private _snackBarService: MatSnackBarService, private _loginFormService: LoginFormService) {}

  get loginForm() {return this._loginFormService.loginForm;}

  ngOnInit(): void {
    this._store.pipe(select(selectIsLoading), distinctUntilChanged()).subscribe(isLoading => {this.isLoading = isLoading});
    this._store.pipe(select(selectUser), distinctUntilChanged()).subscribe(user => {this.user = user; this.user ? this.onLoginSuccess() : null});
    this._store.pipe(select(selectError), distinctUntilChanged()).subscribe(error => {this.error = error; this.error ? this.onLoginFailure() : null});
  }

  onLogin() {
    if (!this.loginForm.valid) { this._snackBarService.open(MESSAGE_LOGIN_FORM_INVALID, SNACKBAR_ACTION_TYPE_DISMISS); return;}
    this._store.dispatch(login({username: this.loginForm.value.email, password: this.loginForm.value.password}));
  }

  onLoginSuccess(){this._snackBarService.open(MESSAGE_LOGIN_SUCCESS, SNACKBAR_ACTION_TYPE_DISMISS);}
  
  onLoginFailure(){this._snackBarService.open(this.error!, SNACKBAR_ACTION_TYPE_DISMISS);}
}