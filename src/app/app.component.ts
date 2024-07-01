import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
  <header class="brand-name">
    <div class="logo">
      <img src="assets/download.png" alt="Your Tours Guide Logo" aria-hidden="true">
    </div>
    <nav>
      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
        <li><a routerLink="/bookings" routerLinkActive="active">Bookings</a></li>
        <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
      </ul>
      </nav>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>


  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'Your Tours Guide';
}
