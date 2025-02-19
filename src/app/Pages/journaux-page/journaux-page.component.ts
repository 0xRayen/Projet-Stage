import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-journaux-page',
  imports: [RouterOutlet],
  templateUrl: './journaux-page.component.html',
  styleUrl: './journaux-page.component.css',
})
export class JournauxPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/journal/form`]);
  }

  constructor(private router: Router, private route: ActivatedRoute) {}
}
