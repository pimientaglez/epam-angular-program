import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import User from 'src/app/models/User';
import * as LoginPageActions from '../actions/auth.actions';

export interface State {
  User: User | null;
  isAuthenticated: boolean;
}

export const initialState: State = {
  User: null,
  isAuthenticated: false
};

const loginReducer = createReducer(
  initialState,
  on(LoginPageActions.login, state => ({ ...state, isAuthenticated: true })),
  on(LoginPageActions.loginComplete, (state, { user }) => ({ ...state, User: user, isAuthenticated: true })),
  on(LoginPageActions.loginFailure, state => ({ ...state, User: null, isAuthenticated: false })),
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}