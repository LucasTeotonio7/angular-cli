import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesComponent } from './courses.component';




const coursesRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent
    },
    {
        path: 'not-found',
        component: CourseNotFoundComponent
    },
    {
        path: ':id',
        component: CourseDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(coursesRoutes)],
    exports: [RouterModule]
  })
export class CoursesRoutingModule { }