import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chantiers-page',
  imports: [RouterOutlet],
  templateUrl: './chantiers-page.component.html',
  styleUrl: './chantiers-page.component.css',
})
export class ChantiersPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/chantiers/form`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}