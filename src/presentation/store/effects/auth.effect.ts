import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { login, loginSuccess, loginFailure, logout } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
    // TO DO:  DEVOLVER SEGUN TIPO CORRESPONDIENTE
    //   mergeMap(({ username, password }) =>
    //     this.authService.login(username, password).pipe(
    //       map(user => loginSuccess({ user })),
    //       catchError(error => of(loginFailure({ error: error.message })))
    //     )
    //   )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => {
        // this.authService.logout();
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    // TO DO:  COMUNICARR CON CAPA CORRESPONDIENTE
    // private authService: AuthService,
    private router: Router
  ) {}
}