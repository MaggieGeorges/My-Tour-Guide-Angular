import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HotelLocation} from '../hotel-location';
import { hotelsService } from '../Services/hotel.service';
import { ToursLocation } from '../tours-location';
import { toursService } from '../Services/tours.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="HotelLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{HotelLocation?.name}}</h2>
        <p class="listing-city">{{HotelLocation?.location}}</p>
      </section>
      <section class="listing-features">
        <h2 class="listing-heading">About this hotel location</h2>
        <ul>
          <li>StarRating available: {{HotelLocation?.starrating}}</li>
          <li>Does this location have wifi: {{HotelLocation?.wifi}}</li>
          <li>Does this location have laundry: {{HotelLocation?.laundry}}</li>
        </ul>
      </section>

      <section class="listing-apply">
        <h2 class="section-heading">Apply now to book here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email">
          

          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  HotelsService = inject(hotelsService); 
  HotelLocation:  HotelLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });


  constructor() {
    const hotelLocationId = Number(this.route.snapshot.params['id']);
    this.HotelsService.getHotelLocationById( hotelLocationId).then(hotelLocation =>{
      this. HotelLocation = hotelLocation;
    });
  }
  submitApplication(){
    this.HotelsService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
