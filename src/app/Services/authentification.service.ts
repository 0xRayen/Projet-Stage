import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private isLoggedIn = false; // Change this after successful login

  constructor(private router: Router) {}

  async checkLogin(username: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post('http://localhost:3000/admin/login', {
        email: username,
        password: password,
      });
      if (response.status === 200) {
        this.isLoggedIn = true;
        localStorage.setItem('auth', 'true'); // Store login state
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    const checkLogin = await this.checkLogin(username, password);
    if (checkLogin) {
      this.isLoggedIn = true;
      localStorage.setItem('auth', 'true'); // Store login state
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('auth'); // Remove token from localStorage
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') === 'true'; // Check if user is logged in
  }
}
