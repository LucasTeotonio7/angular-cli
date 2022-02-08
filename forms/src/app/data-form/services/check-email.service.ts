import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckEmailService {

  constructor(private http: HttpClient) { }

  checkEmail(email: string){
    return this.http.get('assets/data/emails.json').pipe(
      delay(2000),
      map((data:any) => data.emails),
      // tap(console.log),
      map((data:any) => data.filter((v:any) => v.email === email)),
      // tap(console.log),
      map((data: any[]) => data.length > 0),
      // tap(console.log),
    );
  }

}
