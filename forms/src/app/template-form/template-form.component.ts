import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkTouched(field: any): boolean{
    return !field.valid && field.touched;
  }

  ApplyErrorClass(field: any){
    return { 'is-invalid': this.checkTouched(field) };
  }

  searchCep(cep: any, form: any){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.resetFormData(form);

        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
          data => this.fillFields(data, form)
        );

      }

    }

  }

  fillFields(dados: any, ngForm: any){
    // ngForm.setValue({
    //   name: ngForm.value.name,
    //   email: ngForm.value.email,
    //   address: {
    //     cep: dados.cep,
    //     number: '',
    //     complement: dados.complemento,
    //     street: dados.logradouro,
    //     district: dados.bairro,
    //     city: dados.localidade,
    //     state: dados.uf
    //   }

    // })

    ngForm.form.patchValue({
      address: {
        complement: dados.complemento,
        street: dados.logradouro,
        district: dados.bairro,
        city: dados.localidade,
        state: dados.uf
      }
    });

  }

  resetFormData(ngForm: any){
    ngForm.form.patchValue({
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
