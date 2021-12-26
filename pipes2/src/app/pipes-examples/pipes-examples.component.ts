import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

  filter: string = ''

  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numberPages: 314,
    price: 44.99,
    dateLaunch: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  books: any [] = ['java', 'angular']

  valueAsync = new Promise((resolve, rejects)=>{
    setTimeout(() => resolve('valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2500).pipe(map(valor => 'valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(value: any){
    this.books.push(value);
    console.log(this.books);
  }

  getCourses(){
    if (this.books.length === 0 || this.filter === ''){
      return this.books;
    }

    return this.books.filter((v:any)=>{
      if(v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0){
        return true;
      }
      return false
    })
  }

}
