import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  courses:string[] = [];
  showCourses:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("lint-test")
  }

  onShowCourses(): void{
    this.showCourses = !this.showCourses;
  }


}
