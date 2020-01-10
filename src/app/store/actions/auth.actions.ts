import { createAction, props } from '@ngrx/store';
import Login from 'src/app/models/Login';
import User from 'src/app/models/User';

export const login = createAction(
    '[Login Page] Login',
    props< Login >()
);
export const getUser = createAction(
    '[Login Page] Get User',
);

export const loginComplete = createAction(
    '[Login Page] Login Complete',
    props<{ user: User }>()
);

export const loginFailure = createAction(
    '[Auth API] Login Failure',
    (errorMessage = 'Error logging in') => ({ payload: { errorMessage }})
);
