import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personnel-page',
  imports: [RouterOutlet],
  templateUrl: './personnel-page.component.html',
  styleUrl: './personnel-page.component.css',
})
export class PersonnelPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/personnel/form`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}
