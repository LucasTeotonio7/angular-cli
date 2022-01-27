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

}
