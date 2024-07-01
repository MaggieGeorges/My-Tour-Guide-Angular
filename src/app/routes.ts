import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { RegisterComponent } from './Components/register/register.component';



export const routeConfig: Routes = [
         {path:'', component:HomeComponent},
         {path:'login', component:LoginComponent},
         {path: 'register', component:RegisterComponent},
         {path:'bookings/:id', component: BookingsComponent},
         //{ path: 'booking', component: BookingsComponent }

];
export default routeConfig;


       
