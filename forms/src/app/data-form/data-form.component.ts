import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.form = this.FormBuilder.group({
      name: [null],
      email: [null]
    })

  }

}
