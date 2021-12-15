import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})
export class CustomDirectivesComponent implements OnInit {

  showCourses:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowCourses(): void{
    this.showCourses = !this.showCourses;
  }

}
