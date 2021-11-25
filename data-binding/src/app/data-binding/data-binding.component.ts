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

  eventValue: string = ''
  savedValue: string = ''
  isMouseOver: boolean = false

  courseName: string = 'angular';

  initialValue: number = 15;

  constructor() { }

  onChangeValue(event: any){
    console.log(event.newValue)
  }

  ngOnInit(): void {
  }

  getValor(){
    return 1;
  }

  likeCurso(): boolean{
    return true
  }

  buttonClick(){
    alert('click')
  }

  onKeyUp($event: KeyboardEvent){
    this.eventValue = ((<HTMLInputElement>$event.target).value)
  }

  saveValue($event: any){
    this.savedValue = ($event)
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver
  }

  onMouseOut(){
    this.isMouseOver = !this.isMouseOver
  }

}
