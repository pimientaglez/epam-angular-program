import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, finalize } from 'rxjs/operators';
import * as LoginPageActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { Router } from '@angular/router';
import Token from 'src/app/models/Token';
import User from 'src/app/models/User';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginPageActions.login),
            switchMap( action => {
                return this.authService.login({login: action.login, password: action.password})
                .pipe(
                    tap( (data: Token) => {
                        localStorage.setItem('user', action.login );
                        localStorage.setItem('token', data.token);
                        this.errorNotifierService.setErrorMsg('');
                    }),
                    map(() => {
                        return LoginPageActions.getUser();
                    }),
                    catchError( error => {
                        this.errorNotifierService.setErrorMsg(error);
                        return of(LoginPageActions.loginFailure({error}));
                    } ),
                    finalize( () => {
                        this.loadingService.setLoadingStatus(false);
                    })
                );
            })
        );
    });

    getUser$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(LoginPageActions.getUser),
            switchMap( action => {
                return this.authService.getUserInfo().
                    pipe(
                        map( (res: User) => {
                            this.router.navigate(['/']);
                            return LoginPageActions.loginComplete({user: res});
                        })
                    );
            })
        );
    });


    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private loadingService: LoadingService,
        private errorNotifierService: ErrorNotifierService,
        private router: Router,
    ) {}
}

