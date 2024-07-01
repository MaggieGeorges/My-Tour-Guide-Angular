
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../Models/booking.model';
import { Observable } from 'rxjs';

@Injectable()
export class BookingService {
  private apiUrl = 'http://localhost:3000/bookings'; 

  constructor(private http: HttpClient) {}

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }
}