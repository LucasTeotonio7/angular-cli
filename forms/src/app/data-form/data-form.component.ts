import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { StatesBr } from '../shared/models/states-br.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form!: FormGroup;
  states!: StatesBr [];

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private DropdownService: DropdownService) { }

  ngOnInit(): void {

    // this.form = new ForGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null)
    // });


    this.DropdownService.getStatesBr().subscribe(data =>{
      this.states = data;
      console.log(data)
    })


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
        state: [null]
      })
      // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]

    })


  }
  onSubmit(){
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
    console.log('data')
    let cep = this.form.get('address.cep')?.value

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.resetFormData();

        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
          data => {this.fillFields(data)
          console.log(data)
          });

      }

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

}
