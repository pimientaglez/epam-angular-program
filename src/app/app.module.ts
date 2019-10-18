import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SectionComponent } from './components/section/section.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseComponent } from './components/course/course.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { UserSectionComponent } from './components/user-section/user-section.component';

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
    FakeLogoComponent,
    AddCourseComponent,
    SearchCourseComponent,
    UserSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
