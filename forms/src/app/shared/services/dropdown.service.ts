import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { StatesBr } from '../models/states-br.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getStatesBr(){
    return this.http.get<StatesBr[]>('assets/data/statesbr.json');
  }

  getCities(idState: number){
    return this.http.get<City[]>('assets/data/cities.json').pipe(
      map((cities: City[])=> cities.filter(c => c.state == idState))
    )
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
