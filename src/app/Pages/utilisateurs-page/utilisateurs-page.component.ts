import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-utilisateurs-page',
  imports: [RouterOutlet],
  templateUrl: './utilisateurs-page.component.html',
  styleUrl: './utilisateurs-page.component.css',
})
export class UtilisateursPageComponent {
  navigateToForm(): void {
    this.router.navigate([`/utilisateurs/form`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}
