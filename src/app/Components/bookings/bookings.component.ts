
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../Services/booking.service';
import { Booking } from '../../Models/booking.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, HttpClientModule],
  styleUrls: ['./bookings.component.css'],
  providers: [BookingService]
})
export class BookingsComponent {
  bookingForm!: FormGroup;
  hotelLocationId: string;

  constructor(private fb: FormBuilder, private bookingService: BookingService, private route: ActivatedRoute) {
    this.hotelLocationId = this.route.snapshot.params['id'];
    this.createForm();
  }

  createForm() {
    this.bookingForm = this.fb.group({
      userId: ['', Validators.required],
      toursId: ['', Validators.required],
      hotelsId: [this.hotelLocationId, Validators.required],
      bookingDate: ['', Validators.required]
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      const newBooking: Booking = {
        Id: 'unique_id',
        UserId: this.bookingForm.value.userId,
        ToursId: this.bookingForm.value.toursId,
        HotelsId: this.hotelLocationId,
        BookingDate: new Date(this.bookingForm.value.bookingDate),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      this.bookingService.createBooking(newBooking).subscribe((response: Booking) => {
        console.log('Booking created:', response);
      });
    }
  }
}