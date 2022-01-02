import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { CoursesComponent } from "./courses.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CourseNotFoundComponent } from "./course-not-found/course-not-found.component";
import { CoursesService } from "./courses.service";

@NgModule({
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        CourseNotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [CoursesService],
  })
  export class CoursesModule { }