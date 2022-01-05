import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentRoutingModule } from './student.routing.module';

@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
