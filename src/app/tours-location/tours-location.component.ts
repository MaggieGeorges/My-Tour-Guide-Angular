import { Component, Input } from '@angular/core';
import { ToursLocation } from '../tours-location';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tours-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./tours-location.component.css'],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="toursLocation.photo" alt="Exterior photo of {{ toursLocation.name }}">
      <h2 class="listing-heading">{{ toursLocation.name }}</h2>
      <p class="listing-location">{{ toursLocation.destination }}</p>
      <p class="listing-description">{{toursLocation.description}}</p>
      <p class="listing-price">{{ toursLocation.price }}</p>
      <a [routerLink]="['/details', toursLocation.id]">Book now</a>
    </section>
  `,
})
export class ToursLocationComponent {
  @Input() toursLocation!: ToursLocation;

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}
