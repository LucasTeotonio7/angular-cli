import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
