import { CourseResolverGuard } from './guards/course-resolver.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  {
    path: 'create',
    component: CoursesFormComponent,
    resolve: {
      course: CourseResolverGuard,
    },
  },
  {
    path: 'update/:id',
    component: CoursesFormComponent,
    resolve: {
      course: CourseResolverGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
