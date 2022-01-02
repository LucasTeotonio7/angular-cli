import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";

import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CourseNotFoundComponent } from "./courses/course-not-found/course-not-found.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'courses/:id',
        component: CourseDetailComponent
    },
    {
        path: 'not-found',
        component: CourseNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }