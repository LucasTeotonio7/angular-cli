import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchCepService } from '../shared/services/search-cep.service';


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

  constructor(
    private http: HttpClient,
    private SearchCep: SearchCepService) { }

  onSubmit(form: any){
    // console.log(form)
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(
      data => {
        console.log(data);
        form.form.reset();
      }
    );
  }

  ngOnInit(): void {
  }

  checkTouched(field: any): boolean{
    return !field.valid && field.touched;
  }

  ApplyErrorClass(field: any){
    return { 'is-invalid': this.checkTouched(field) };
  }

  searchCep(cep: string, form: any){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== ''){
      this.SearchCep.ConsultCEP(cep).subscribe(
        data => {this.fillFields(data, form)
        console.log(data)
        });
    }



  }

  fillFields(data: any, ngForm: any){
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

    ngForm.form.patchValue({
      address: {
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
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
