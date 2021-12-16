import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];
  coursesService: CoursesService;

  constructor() {
    this.coursesService = new CoursesService();
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses()
  }

}
