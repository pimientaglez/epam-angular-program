import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';


const routes: Routes = [
  {path: 'courses', redirectTo: '', pathMatch:'full'},
  {path: 'detail/:id', redirectTo: '', pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'new-course', component: NewCourseComponent },
  {path: '', component: CoursesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
