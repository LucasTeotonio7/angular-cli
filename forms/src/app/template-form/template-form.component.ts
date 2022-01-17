import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  onSubmit(form: any){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
