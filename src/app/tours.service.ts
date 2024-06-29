import { Injectable } from '@angular/core';
import { ToursLocation  } from './tours-location';

@Injectable({
  providedIn: 'root' 
})
export class toursService {
 
    url = 'http://localhost:3000/tours';
  
  
  constructor() { }

  async getAlltoursLocations() : Promise<ToursLocation []> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async gettoursLocationById(id: Number): Promise<ToursLocation | undefined> {
    const data = await fetch('${this.url}/${id}');
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
