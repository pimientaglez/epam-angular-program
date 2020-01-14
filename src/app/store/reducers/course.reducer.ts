import {
    createReducer,
    on,
    Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import User from 'src/app/models/User';
import * as CoursePageActions from '../actions/course.actions';
import Course from 'src/app/models/Course';

export interface State {
    coursesToDisplay: Course[];
    coursesFiltered: Course[];
    coursesFromService: Course[];
}

export const initialState: State = {
    coursesToDisplay: [],
    coursesFiltered: [],
    coursesFromService: [],
};

const coursesReducer = createReducer(
    initialState,
    on(CoursePageActions.loadCourses, state => ({ ...state })),
    on(CoursePageActions.loadCoursesSuccess, (state, { courses }) => ({
        ...state,
        coursesFromService: courses,
        coursesToDisplay: courses,
        coursesFiltered: courses,
    })),
    on(CoursePageActions.loadCoursesFailure, state => ({ ...state })),
    on(CoursePageActions.loadCoursesByText, state => ({ ...state })),
);

export function reducer(state: State | undefined, action: Action) {
return coursesReducer(state, action);
}
