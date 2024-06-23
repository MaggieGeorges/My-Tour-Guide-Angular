import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelLocationComponent } from '../hotel-location/hotel-location.component';
import { HotelLocation } from '../hotel-location';
import { hotelsService } from '../hotel.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HotelLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by location" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location *ngFor="let hotelLocation of filteredLocationList" [hotelLocation] ="hotelLocation"></app-housing-location>
    </section>

  `,
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
  hotelLocationList: HotelLocation [] =[];
  hotelsService: hotelsService = inject(hotelsService);
  filteredLocationList:HotelLocation [] = [];

  constructor(){
    this.hotelsService.getAllHotelLocations().then(( hotelLocationList: HotelLocation[]) =>{
      this. hotelLocationList =  hotelLocationList;
      this.filteredLocationList =  hotelLocationList;
  });

  }

  filterResults(text: string){
    if (!text) this.filteredLocationList = this. hotelLocationList;

    this.filteredLocationList =this. hotelLocationList.filter(
      hotelLocation  => hotelLocation ?.location.toLowerCase().includes(text.toLowerCase())

    );
  }
}
