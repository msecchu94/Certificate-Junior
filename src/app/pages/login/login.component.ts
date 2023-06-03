import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { login } from '../../../presentation/store/actions/auth.actions';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/presentation/store/state/auth.state';
import { selectError, selectIsLoading, selectUser } from 'src/presentation/store/selectors/auth.selectors';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  loginFrm: FormGroup;
  user:any;
  isLoading: boolean = false;
  error: string | null = '';
  constructor(private _store: Store<AuthState>, private _fb: FormBuilder,  private _snackBarService: MatSnackBarService) {
    this.loginFrm = this._fb.group({ email: ['', Validators.email], password: ['', Validators.required]});
  }

  ngOnInit(): void {
    this._store.pipe(select(selectIsLoading), distinctUntilChanged()).subscribe(isLoading => {this.isLoading = isLoading});
    this._store.pipe(select(selectUser), distinctUntilChanged()).subscribe(user => {this.user = user;});
    this._store.pipe(select(selectError), distinctUntilChanged()).subscribe(error => {this.error = error;});
  }

  onLogin(loginFrm: FormGroup) {
    if (!loginFrm.valid) {
      this._snackBarService.open('Complete Form', 'Dismiss');
      return;
    }
    this._store.dispatch(login({username: loginFrm.value.email, password: loginFrm.value.password}));
  }
}
