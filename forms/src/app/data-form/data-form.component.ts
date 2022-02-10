import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { EMPTY, empty, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { DropdownService } from '../shared/services/dropdown.service';
import { StatesBr } from '../shared/models/states-br.model';
import { SearchCepService } from '../shared/services/search-cep.service';
import { FormValidations } from '../shared/form-validators';
import { CheckEmailService } from './services/check-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form!: FormGroup;
  // states!: StatesBr [];
  states!: Observable <StatesBr[]>;
  levels!: any[];
  languages!: any[];
  newsletterOp!: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  cepMsgError = 'CEP Obrigatório!';

  constructor(
    private checkEmailService: CheckEmailService,
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private DropdownService: DropdownService,
    private SearchCep: SearchCepService) { }

  ngOnInit(): void {

    this.states = this.DropdownService.getStatesBr();
    this.levels = this.DropdownService.getLevels();
    this.languages = this.DropdownService.getLanguages();
    this.newsletterOp = this.DropdownService.getNewsLetter();

    // this.checkEmailService.checkEmail('email3@email.com').subscribe()
    // this.form = new ForGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null)
    // });


    // this.DropdownService.getStatesBr().subscribe(data =>{
    //   this.states = data;
    //   console.log(data)
    // })


    this.form = this.FormBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email, this.validateEmail.bind(this)]],
      confirmEmail: [null, [FormValidations.equalsTo('email')]],

      address: this.FormBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        number: [null, Validators.required],
        complement: [null],
        street: [null, Validators.required],
        district: [null, Validators.required],
        city: [null],
        state: [null],
      }),
      // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]

      level: [null],
      language: [null],
      newsletter: ['s'],
      terms: [false, Validators.pattern('true')],

      frameworks: this.buildFrameworks()

    })

    this.form.get('address.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status do CEP: '+value)),
        switchMap(status => status === 'VALID' ?
          this.SearchCep.ConsultCEP(this.form.get('address.cep')?.value)
          : EMPTY
        )
      )
      .subscribe(data => data ? this.fillFields(data) : {})

  }

  buildFrameworks(){

    const values = this.frameworks.map(v => new FormControl(false));
    return this.FormBuilder.array(values, FormValidations.minSelectedCheckboxes(1));

    // this.FormBuilder.array ([
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    // ])
  }

  onSubmit(){
    console.log(this.form.value);

    let valueSubmit = Object.assign({}, this.form.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v:any, i:any) => v ? this.frameworks[i] : null)
      .filter((v:any) => v !== null)
    });
    console.log(valueSubmit);

    if (this.form.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
      data => {
        console.log(data);
        // reset form
        this.reset();
      },
      (error: any) =>{
        alert('erro');
      });
    } else{
      this.checkFormValid(this.form)
    }
  }

  checkFormValid(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field)
      const control = formGroup.get(field)
      control?.markAsTouched();

      if(control instanceof FormGroup){
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

  checkCepMsgError(field: string){
    console.log(this.form.get(field)?.hasError('required'))
    if(this.form.get(field)?.hasError('required')){
      this.cepMsgError = 'CEP Obrigatório!'
    }
    else if(this.form.get(field)?.hasError('InvalidCep')){
      this.cepMsgError =  'CEP inválido!'
    }
  }

  ApplyErrorCepClass(field: string){
    this.checkCepMsgError(field);
    return { 'is-invalid': this.checkTouched(field) };
  }

  checkInvalidEmail(msg: string = ''){

    let FieldEmail = this.form.get('email');

    if(this.form.get('confirmEmail')?.hasError('equalsTo')){
      return "Emails não são iguais!"
    }
    if(FieldEmail?.errors){
      if (FieldEmail.errors['required'] && FieldEmail.touched){
        return msg;
      }
      if (FieldEmail.errors['email'] && FieldEmail.touched){
        return 'Email Inválido!';
      }
      // if(FieldEmail.status === 'PENDING'){
      //   return 'Validando Email ...'
      // }
      // if(FieldEmail.status === 'VALID'){
      //   return 'Email válido!'
      // }
      // console.log(FieldEmail?.hasError('invalidEmail'))
      if(FieldEmail?.hasError('invalidEmail')){
        console.log('entrou')
        return "Email já cadastrado!"
      }
    }

    return '';
  }

  ApplyErrorClass(field: string){
    return { 'is-invalid': this.checkTouched(field) };
  }

  searchCep(){

    let cep = this.form.get('address.cep')?.value

    if (cep != null && cep !== ''){
      this.SearchCep.ConsultCEP(cep).subscribe(
        data => {this.fillFields(data)
        console.log(data)
        });
    }


  }

  fillFields(data: any){
    // ngForm.setValue({
    //   name: ngForm.value.name,
    //   email: ngForm.value.email,
    //   address: {
    //     cep: data.cep,
    //     number: '',
    //     complement: data.complemento,
    //     street: data.logradouro,
    //     district: data.bairro,
    //     city: data.localidade,
    //     state: data.uf
    //   }

    // })

    this.form.patchValue({
      address: {
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      }
    });

    // this.form.get('name')?.setValue('Raul');

  }

  resetFormData(){

    this.form.patchValue({
      address: {
        complement: null,
        street: null,
        district: null,
        city: null,
        state: null
      }
    });
  }

  setLevel(){
    const level = {name: 'dev', level: 'full', desc: 'Dev Full'};
    this.form.get('level')?.setValue(level)
  }

  setLanguages(){
    this.form.get('language')?.setValue(['java', 'python'])
  }

  compareLevel(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.id === obj2.id && obj1.level === obj2.level) : obj1 === obj2;
  }

  getFrameworks(): FormArray{
    return this.form.get('frameworks') as FormArray;
  }

  validateEmail(formControl: FormControl){
    console.log(formControl.value)
    return this.checkEmailService.checkEmail(formControl.value).pipe(
      map(emailExists => emailExists ? { invalidEmail: true } : null));
  }

  // validarEmail(formControl: FormControl) {
  //   return this.verificaEmailService.verificarEmail(formControl.value)
  //     .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  // }


  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

}
