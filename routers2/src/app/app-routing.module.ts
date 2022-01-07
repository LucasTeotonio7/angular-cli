import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(
            m => m.CoursesModule)
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(
            m => m.StudentModule
        )
    },
    {
        path: '',
        component: HomeComponent
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