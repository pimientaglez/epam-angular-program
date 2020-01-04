import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { SectionComponent } from './components/section/section.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseComponent } from './components/course/course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { CourseAgeDirective } from './directives/course-age.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterbytextPipe } from './pipes/filterbytext.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        MatInputModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        BreadcrumbComponent,
        FooterComponent,
        CoursesPageComponent,
        SectionComponent,
        CourseListComponent,
        CourseComponent,
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
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
