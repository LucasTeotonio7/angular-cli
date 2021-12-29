import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CourseDetailComponent } from "./course-detail/course-detail.component";

import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CourseNotFoundComponent } from "./course-not-found/course-not-found.component";

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/:id', component: CourseDetailComponent},
    {path: 'not-found', component: CourseNotFoundComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);