import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  nome: string = 'abc'

  pessoa: any ={
    nome: 'test',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
