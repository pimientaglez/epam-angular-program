import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { SectionComponent } from './components/section/section.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseComponent } from './components/course/course.component';
import { LogoComponent } from './components/logo/logo.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { CourseAgeDirective } from './directives/course-age.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { FilterbytextPipe } from './pipes/filterbytext.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatAutocompleteModule, MatInputModule, MatOptionModule } from '@angular/material';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditComponent } from './pages/edit/edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './utils/interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { StoreModule } from '@ngrx/store';
import * as authReducer from './store/reducers/auth.reducer';
import * as courseReducer from './store/reducers/course.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { CourseEffects } from './store/effects/course.effects';
import { CurstomDateComponent } from './components/curstom-date/curstom-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    CoursesPageComponent,
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    LogoComponent,
    AddCourseComponent,
    SearchCourseComponent,
    UserSectionComponent,
    LoadMoreComponent,
    CourseAgeDirective,
    DurationPipe,
    OrderbyPipe,
    FilterbytextPipe,
    DialogConfirmationComponent,
    LoginComponent,
    NewCourseComponent,
    NotFoundComponent,
    EditComponent,
    LoadingComponent,
    ErrorMsgComponent,
    CurstomDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    StoreModule.forRoot({ auth: authReducer.reducer, courses: courseReducer.reducer  }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects, CourseEffects]),
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmationComponent]
})
export class AppModule { }
