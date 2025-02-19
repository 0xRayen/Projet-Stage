import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-articles-page',
  imports: [RouterOutlet],
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.css',
})
export class ArticlesPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/articles/form`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}
