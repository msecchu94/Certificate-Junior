import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from '../actions/auth.actions';
import { AuthState } from '../state/auth.state';


const initialState: AuthState = {
  user: null,
  error: null,
  isLoading: false
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isLoading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({ ...state, user, isLoading: false, error: null })),
  on(loginFailure, (state, { error }) => ({ ...state, user: null, isLoading: false, error })),
  on(logout, () => initialState)
);