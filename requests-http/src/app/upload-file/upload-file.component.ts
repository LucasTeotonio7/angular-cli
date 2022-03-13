import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    this.progress = 0;
  }

  onUpload(){
    console.log(this.files)

    if(this.files && this.files.size > 0){
      this.service.upload(this.files, `${environment.BASE_URL}/upload`)
      .subscribe((event: HttpEvent<object>) => {
        // HttpEventType
        if(event.type === HttpEventType.Response){
          console.log('Upload Concluído')
        } else if(event.type === HttpEventType.UploadProgress){
          if (event.total){
            const percentDone = Math.round((event.loaded * 100) / event.total);
            console.log('progress: ', percentDone);
            this.progress = percentDone;
          }
        }
        console.log(event)
      })
    }
  }

}
