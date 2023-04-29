import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <header>
      <nav class="navbar">
        <a class="navbar-title" href="#">NgRx Fundamentals</a>
        <ul class="navbar-list">
          <li class="nav-item">
            <a class="nav-link" routerLink="/" routerLinkActive="active-link"
              >home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLink="/products"
              routerLinkActive="active-link"
              >products</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = 'ngrx-products';
}
