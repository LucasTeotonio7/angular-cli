import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatesBr } from '../models/states-br.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getStatesBr(){
    return this.http.get<StatesBr[]>('assets/data/statesbr.json');
  }

  getLevels(){
    return [
      {name: 'dev', level: 'junior', desc: 'Dev Jr'},
      {name: 'dev', level: 'full', desc: 'Dev Full'},
      {name: 'dev', level: 'senior', desc: 'Dev Senior'}
    ]
  }

  getLanguages(){
    return [
      {name: 'java', desc: 'java'},
      {name: 'php', desc: 'php', },
      {name: 'python', desc: 'python'},
      {name: 'ruby', desc: 'ruby'}
    ]
  }

  getNewsLetter(){
    return [
      {value: 's', desc: 'Sim'},
      {value: 'n', desc: 'Não'}
    ]
  }

}
