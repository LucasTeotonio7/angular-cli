import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient) { }

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
  onSubmit(){
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
      data => console.log(data)
    );
  }

}
