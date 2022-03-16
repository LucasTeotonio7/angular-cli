import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable, EMPTY } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any[]> = EMPTY;
  total = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(){

    const fields = 'name,description,version,homepage';
    let value = this.queryField.value;

    if(value && (value = value.trim()) !== ''){

      const params_ = {
        search: value,
        fields: fields
      }

      let params = new HttpParams();
      params = params.set('search', value)
      params = params.set('fields', fields)

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res:any) => this.total = res.total),
          map((res:any) => res.results)
          );
          console.log(this.results$);
    }
  }

}
