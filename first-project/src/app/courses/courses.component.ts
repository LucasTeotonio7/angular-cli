import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalUrl: string;
  portalName: string;

  courses: string[] = ['java', 'angular', 'react', 'vue', 'c++', 'php']

  constructor() {
    this.portalUrl = 'https://digitalinnovation.one/'
    this.portalName = 'digital innovation'
  }

  ngOnInit(): void {
  }

}
