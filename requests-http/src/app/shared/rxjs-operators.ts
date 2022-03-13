import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

export function filterResponse<Type>(){
  return pipe(
    filter((event: HttpEvent<Type>) => event.type === HttpEventType.Response),
    map((resp: any) => resp.body)
  );
}


export function uploadProgress<Type>(cb: (progress: number) => void){
  return tap((event: HttpEvent<Type>) =>{
    if(event.type === HttpEventType.UploadProgress && event.total){
      cb(Math.round((event.loaded * 100) / event.total));
    }
  });
}
