import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path: 'courses', redirectTo: '', pathMatch:'full'},
  {path: 'detail/:id', redirectTo: '', pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'new', component: NewCourseComponent },
  {path: '', component: CoursesPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
