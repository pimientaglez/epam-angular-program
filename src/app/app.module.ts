import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
