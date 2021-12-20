import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CoursesComponent],
  // providers: [CoursesService]
})
export class CoursesModule { }
