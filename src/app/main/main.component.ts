import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  navigateToForm(): void {
    const currentRoute = this.router.url.split('/')[1]; // Extract the base route
    if (currentRoute) {
      this.router.navigate([`/${currentRoute}/form`]); // Navigate to `/currentRoute/form`
    }
  }
  title = 'Accueil'; // Default title

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Update the title immediately on initialization
    this.updateTitle(this.router.url);

    // Listen for route changes to update the title dynamically
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd)) // Filter for navigation end events
      .subscribe(() => {
        this.updateTitle(this.router.url);
      });
  }

  /**
   * Updates the title based on the current route.
   * @param url The current URL.
   */
  private updateTitle(url: string): void {
    const currentRoute = url.split('/')[1]; // Get the first segment of the URL
    this.title = currentRoute
      ? currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1) // Capitalize route name
      : 'Accueil'; // Default to "Accueil" for the root or empty routes
  }
}
