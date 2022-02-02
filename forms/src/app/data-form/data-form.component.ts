import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { StatesBr } from '../shared/models/states-br.model';
import { SearchCepService } from '../shared/services/search-cep.service';
import { Observable } from 'rxjs';

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

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private DropdownService: DropdownService,
    private SearchCep: SearchCepService) { }

  ngOnInit(): void {

    this.states = this.DropdownService.getStatesBr();
    this.levels = this.DropdownService.getLevels();
    this.languages = this.DropdownService.getLanguages();
    this.newsletterOp = this.DropdownService.getNewsLetter();

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
      email: [null, [Validators.required, Validators.email]],

      address: this.FormBuilder.group({
        cep: [null, Validators.required],
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

  }

  buildFrameworks(){

    const values = this.frameworks.map(v => new FormControl(false));
    return this.FormBuilder.array(values);

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

  checkInvalidEmail(){

    let FieldEmail = this.form.get('email');

    if(FieldEmail?.errors){
      if (FieldEmail.errors['required'] && FieldEmail.touched){
        return 'Email Obrigatório!'
      }
      if (FieldEmail.errors['email'] && FieldEmail.touched){
        return 'Email Inválido!'
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

}
