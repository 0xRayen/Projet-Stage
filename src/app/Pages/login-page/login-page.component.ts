import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthentificationService } from '../../Services/authentification.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username = '';
  password = '';

  constructor(
    private authentification: AuthentificationService,
    private router: Router
  ) {}

  async onLogin() {
    if (await this.authentification.login(this.username, this.password)) {
      this.router.navigate(['/journaux']); // Redirect to main page after login
    } else {
      alert('Invalid username or password');
    }
  }
}
