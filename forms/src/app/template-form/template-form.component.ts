import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  user: any = {
    name: 'lucas',
    email: 'lucas@email.com'
  }

  onSubmit(form: any){
    console.log(form)
    console.log(this.user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
