import { Component, Directive, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-base-form',
//   template: '<p></p>',
// })
@Directive({
  selector: 'app-base-form',
})
export abstract class BaseFormComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit(): void;

  onSubmit(){
    if (this.form.valid){
      this.submit()
    } else{
      this.checkFormValid(this.form)
    }
  }

  checkFormValid(formGroup: FormGroup | FormArray){
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field)
      const control = formGroup.get(field)
      control?.markAsTouched();

      if(control instanceof FormGroup || control instanceof FormArray){
        this.checkFormValid(control)
      }

    });
  }

  reset(){
    this.form.reset();
  }

  checkTouched(field: string){
    return !this.form.get(field)?.valid && (this.form.get(field)?.touched || this.form.get(field)?.dirty);
  }

  ApplyErrorClass(field: string){
    return { 'is-invalid': this.checkTouched(field) };
  }

}
