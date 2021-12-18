import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];

  constructor(private _coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses()
  }

}
