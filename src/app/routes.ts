import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
 import { DetailsComponent } from './details/details.component';



const routeConfig: Routes = [
         {path:'', component:HomeComponent},
         {path:'login', component:LoginComponent},
          {path:'details/:id', component:DetailsComponent}

];
export default routeConfig;


       
