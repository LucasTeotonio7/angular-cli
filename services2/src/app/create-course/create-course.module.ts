import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from '../courses/courses.service';
import { CreateCourseComponent } from './create-course.component';
import { ReceiveCourseCreatedComponent } from '../receive-course-created/receive-course-created.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    ReceiveCourseCreatedComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CreateCourseComponent],
  // providers: [CoursesService]
})
export class CreateCourseModule { }
