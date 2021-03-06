import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './guards/auth.guard';
import { CoursesGuard } from './guards/courses.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentGuard } from './guards/student.guard';

const routes: Routes = [
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(
            m => m.CoursesModule
        ),
        canActivate: [AuthGuard],
        canActivateChild: [CoursesGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(
            m => m.StudentModule
        ),
        canActivate: [AuthGuard],
        // canActivateChild: [StudentGuard]
        canLoad: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
  })
export class AppRoutingModule { }