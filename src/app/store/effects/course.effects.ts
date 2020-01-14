import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, finalize } from 'rxjs/operators';
import * as CoursePageActions from '../actions/course.actions';
import { CourseServiceService } from '../../services/course-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { Router } from '@angular/router';
import Course from 'src/app/models/Course';

@Injectable()
export class CourseEffects {

    loadcourses$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(CoursePageActions.loadCourses),
            switchMap(() =>
                this.courseService.getCourses().pipe(
                    map((courses: Course[]) =>
                        CoursePageActions.loadCoursesSuccess({ courses })
                    ),
                    catchError(error => {
                        this.errorNotifierService.setErrorMsg(error);
                        return of( CoursePageActions.loadCoursesFailure({ error }));
                    }),
                    finalize( () => {
                        this.loadingService.setLoadingStatus(false);
                    })
                )
            )
        );
    });
    loadcoursesByText$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(CoursePageActions.loadCoursesByText),
            switchMap((action) =>
                this.courseService.filterCoursesByText(action.text).pipe(
                    map((courses: Course[]) =>
                        CoursePageActions.loadCoursesSuccess({ courses })
                    ),
                    catchError(error => {
                        this.errorNotifierService.setErrorMsg(error);
                        return of( CoursePageActions.loadCoursesFailure({ error }));
                    }),
                    finalize( () => {
                        this.loadingService.setLoadingStatus(false);
                    })
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private courseService: CourseServiceService,
        private loadingService: LoadingService,
        private errorNotifierService: ErrorNotifierService,
     ) {}
}
