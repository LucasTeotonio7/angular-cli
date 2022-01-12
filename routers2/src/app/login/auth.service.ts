import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  loginIn(user: User){

    if(user.name === "user@email.com" && user.password==="teste123"){
      this.userAuth = true;

      this.showMenuEmmiter.emit(true)

      this.router.navigate(['/']);
    } else{
      this.userAuth = false;
      this.showMenuEmmiter.emit(false)
    }

  }

  isAuthenticated(){
    return this.userAuth;
  }

}
