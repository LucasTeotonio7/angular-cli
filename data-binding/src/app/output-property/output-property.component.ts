import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  increment(){
    this.value++;
    this.changeValue.emit({newValue: this.value})
  }

  decrement(){
    this.value--;
    this.changeValue.emit({newValue: this.value})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
