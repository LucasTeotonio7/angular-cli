import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

export class CrudService<Type> {


  constructor(protected http: HttpClient, private API_URL: string) { }

  list(){
    return this.http.get<Type[]>(this.API_URL)
      .pipe(
        delay(500),
        tap(console.log)
      );
  }

  loadById(id: number){
    return this.http.get<Type>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(object: Type){
    return this.http.post(this.API_URL, object).pipe(take(1));
  }

  private update(object: Type){
    return this.http.put(`${this.API_URL}/${object['id' as keyof Type]}`, object).pipe(take(1));
  }

  save(object: Type){
    if (object['id' as keyof Type]){
      return this.update(object);
    }
    return this.create(object);
  }

  delete(id: number){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
