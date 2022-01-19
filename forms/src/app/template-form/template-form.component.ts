import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  user: any = {
    name: null,
    email: 'lucas@email.com'
  }

  onSubmit(form: any){
    console.log(form)
    console.log(this.user)
  }

  constructor() { }

  ngOnInit(): void {
  }

  checkTouched(field: any): boolean{
    return !field.valid && field.touched;
  }

  ApplyErrorClass(field: any){
    return { 'is-invalid': this.checkTouched(field) };
  }

}
