import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.scss']
})
export class DirectiveNgstyleComponent implements OnInit {

  active: boolean = false;
  fontSize: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(){
    this.active = !this.active;
  }

}
