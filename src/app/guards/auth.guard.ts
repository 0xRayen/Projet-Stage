import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authentificationService.isAuthenticated()) {
      return true; // Allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false;
    }
  }
}
