import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { login, loginSuccess, loginFailure, logout } from '../actions/auth.actions';
import { UserLoginUseCase } from '../../../domain/usecases/user-login.usecase';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private userLoginUseCase: UserLoginUseCase,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
        mergeMap(({ username, password }) =>
        this.userLoginUseCase.execute({username, password}).pipe(
          map(user => loginSuccess({ user })),
          catchError(error => of(loginFailure({ error: "error.message" })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => {
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

}