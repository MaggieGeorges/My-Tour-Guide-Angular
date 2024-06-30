import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routeConfig } from './routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelLocationComponent } from './Components/hotels/hotel-location.component';
import { ToursLocationComponent } from './Components/tours/tours-location.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { hotelsService } from './Services/hotel.service';
import { toursService } from './Services/tours.service';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { BookingService } from './Services/booking.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelLocationComponent,
    ToursLocationComponent,
    RegisterComponent,
    BookingsComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    hotelsService,
    toursService,
    BookingService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
