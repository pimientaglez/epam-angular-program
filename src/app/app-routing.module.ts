import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditComponent } from './pages/edit/edit.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'courses', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuardService]},
  {path: 'courses/:id', component: EditComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent },
  {path: 'new', component: NewCourseComponent, canActivate: [AuthGuardService] },
  {path: '', component: CoursesPageComponent, canActivate: [AuthGuardService]},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
