import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  courseAngular: boolean = true

  urlImage = 'http://lorempixel.com/400/200/nature/'

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 1;
  }

  likeCurso(): boolean{
    return true
  }

}
