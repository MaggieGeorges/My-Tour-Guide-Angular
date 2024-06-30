import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Components/login/login.component';
 import { DetailsComponent } from './details/details.component';
 import { BookingsComponent } from './Components/bookings/bookings.component';



export const routeConfig: Routes = [
         {path:'', component:HomeComponent},
         {path:'login', component:LoginComponent},
         {path:'bookings/:id', component: BookingsComponent},
         //{ path: 'booking', component: BookingsComponent }

];
export default routeConfig;


       
