import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUser(value: any) {
    throw new Error('Method not implemented.');
  }
  showStatus() {
      throw new Error('Method not implemented.');
  }

  constructor() { } 

  isLoggedIn = false;

  login(){
    this.isLoggedIn=true
  }

  logout(){
    this.isLoggedIn=false
  }
}
