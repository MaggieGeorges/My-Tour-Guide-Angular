import { Injectable } from '@angular/core';
import { HotelLocation  } from './hotel-location';

@Injectable({
  providedIn: 'root' //is available application-wide
})
export class hotelsService {
 
    url = 'http://localhost:3000/hotels';
  
  
  constructor() { }

  async getAllHotelLocations() : Promise<HotelLocation []> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHotelLocationById(id: Number): Promise<HotelLocation | undefined> {
    const data = await fetch('${this.url}/${id}');
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
