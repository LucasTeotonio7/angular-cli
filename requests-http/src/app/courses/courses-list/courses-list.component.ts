import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  // courses!: Course[];

  courses$: Observable<Course[]> = EMPTY;
;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    // this.courseService.list().subscribe(
    //   data => this.courses = data
    // );

    this.courses$ = this.courseService.list();


  }

}
