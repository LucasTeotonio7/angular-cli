import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";

import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'courses', component: CoursesComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);