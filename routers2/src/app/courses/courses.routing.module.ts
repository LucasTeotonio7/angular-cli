import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesComponent } from './courses.component';




const coursesRoutes: Routes = [
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
    imports: [RouterModule.forChild(coursesRoutes)],
    exports: [RouterModule]
  })
export class CoursesRoutingModule { }