import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelLocationComponent } from './hotel-location/hotel-location.component';
import { ToursLocationComponent } from './tours-location/tours-location.component';
import { hotelsService } from './hotel.service';
import { toursService } from './tours.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelLocationComponent,
    ToursLocationComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule 
    
  ],
  providers: [
    hotelsService,
    toursService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
