import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentRoutingModule } from './student.routing.module';
import { StudentService } from './student.service';
import { StudentDeactivateGuard } from '../guards/student-deactivate.guard';
import { StudentDetailResolver } from './guards/student-detail.resolver';

@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ],
  providers:[
    StudentService,
    StudentDeactivateGuard,
    StudentDetailResolver
  ]
})
export class StudentModule { }
