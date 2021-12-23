import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numberPages: 314,
    price: 44.99,
    dateLaunch: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
