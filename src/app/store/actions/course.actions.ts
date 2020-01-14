import { createAction, props } from '@ngrx/store';
import Course from 'src/app/models/Course';

export const loadCourses = createAction(
    '[Courses Page] Load Courses Page',
);
export const loadCoursesSuccess = createAction(
    '[Courses Page] Load Courses Sucess',
    props<{ courses: Course[] }>()
);
export const loadCoursesFailure = createAction(
    '[Courses Page] Load Courses Failure',
    (errorMessage = 'Error logging in') => ({ payload: { errorMessage }})
);
export const loadCoursesByText = createAction(
    '[Courses Page] Load Courses By Text',
    props< { text: string } >()
);
