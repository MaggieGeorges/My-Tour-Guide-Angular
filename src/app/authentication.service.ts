import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser, RegisterResponse, LoginResponse } from './Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  private readonly Base_URL = "http://localhost:3001/auth/";

  constructor(private http: HttpClient) { }

  registerUser(newUser: AddUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.Base_URL + "register", newUser);
  }

  login(credentials: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.Base_URL + "login", credentials);
  }
}
