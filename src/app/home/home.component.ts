import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelLocationComponent } from '../hotel-location/hotel-location.component';
import { ToursLocationComponent } from '../tours-location/tours-location.component';
import { HotelLocation } from '../hotel-location';
import { ToursLocation } from '../tours-location';
import { toursService } from '../tours.service';
import { hotelsService } from '../hotel.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, CommonModule, HotelLocationComponent,  ToursLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  hotelLocationList: HotelLocation[] = [];
  toursLocationList: ToursLocation[] = [];
  filteredLocationList: HotelLocation[] = [];
  filteredLocation: ToursLocation[] = [];

  hotelsService = inject(hotelsService);
  toursService = inject(toursService);

  constructor() {
    this.hotelsService.getAllHotelLocations().then((hotelLocationList: HotelLocation[]) => {
      this.hotelLocationList = hotelLocationList;
      this.filteredLocationList = hotelLocationList;
    });

    this.toursService.getAlltoursLocations().then((toursLocationList: ToursLocation[]) => {
      this.toursLocationList = toursLocationList;
      this.filteredLocation = toursLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.hotelLocationList;
      this.filteredLocation = this.toursLocationList;
    } else {
      this.filteredLocationList = this.hotelLocationList.filter(
        hotelLocation => hotelLocation?.location.toLowerCase().includes(text.toLowerCase())
      );

      this.filteredLocation = this.toursLocationList.filter(
        toursLocation => toursLocation?.destination.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
