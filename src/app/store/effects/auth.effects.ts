import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, mergeMap } from 'rxjs/operators';
import { login, loginComplete } from '../actions/auth.actions';
import * as LoginPageActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginPageActions.login),
            exhaustMap( action => {
                return this.authService.login({login: action.login, password: action.password})
                .pipe(
                    map( user => {
                        localStorage.setItem('user', action.login );
                        localStorage.setItem('token', user.token);
                        this.loadingService.setLoadingStatus(false);
                        this.errorNotifierService.setErrorMsg('');
                        this.router.navigate(['/']);
                        this.authService.getUserInfo().pipe(
                            map(res =>{
                                return LoginPageActions.loginComplete({user: res})
                            })
                        );
                    }), catchError( error => of(error) )
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