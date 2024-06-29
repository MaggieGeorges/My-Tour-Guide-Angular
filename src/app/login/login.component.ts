import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginResponse } from '../Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  loginForm!: FormGroup;
  sub!: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

    // You can remove the observable example unless you need it for specific debugging purposes
    // this.sub = new Observable<number>(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe({
    //   next: (val) => console.log(val),
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log("completed")
    // });
  }

  ngOnDestroy(): void {
    console.log("Login Component Destroyed");
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: LoginResponse) => {
          console.log(response);
          // Handle successful login, e.g., redirect
        },
        error: (error: any) => {
          console.error(error);
          // Handle login error, e.g., display error message
        }
      });
    }
  }
  
}