import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  imports: [RouterOutlet],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css',
})
export class CategoriesPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/category/form`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}
