import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './guards/auth.guard';
import { CoursesGuard } from './guards/courses.guard';
// import { StudentGuard } from './guards/student.guard';

const routes: Routes = [
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(
            m => m.CoursesModule
        ),
        canActivate: [AuthGuard],
        canActivateChild: [CoursesGuard]
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(
            m => m.StudentModule
        ),
        canActivate: [AuthGuard],
        // canActivateChild: [StudentGuard]
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }