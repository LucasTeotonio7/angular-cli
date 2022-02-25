import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService,
    private alertService: AlertModalService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null,
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ]]
    });
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  hasErrorMessage(field: string){

    let fieldErrors = this.form.get(field)?.errors;

    if (fieldErrors?.required){
      return 'Informe o nome do Curso!'
    }

    if (fieldErrors?.minlength){
      return `O campo deve ter no mínimo ${fieldErrors['minlength'].requiredLength} caracteres!`
    }

    if (fieldErrors?.maxlength){
      return `O campo deve ter no máximo ${fieldErrors['maxlength'].requiredLength} caracteres!`
    }
    else{
      return ''
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit');
      this.courseService.create(this.form.value).subscribe(
        success => {
          this.alertService.showAlertSuccess('Curso salvo com sucesso!');
          this.location.back();
        },
        error=> this.alertService.showAlertDanger('Erro ao criar curso!'),
        () => console.log('request OK')
      )
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset;
  }

}
