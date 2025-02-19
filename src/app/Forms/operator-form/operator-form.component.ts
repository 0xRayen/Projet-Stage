import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operator-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './operator-form.component.html',
  styleUrl: './operator-form.component.css',
})
export class OperatorFormComponent {
  operateur = {
    nom: '',
    mdp: '',
    cin: '',
  };
  constructor(private router: Router) {}
  submitForm(): void {
    // Simulate sending data to the backend
    console.log('Category Data:', this.operateur);
    this.router.navigate(['/utilisateurs']);
  }
  cancelForm(): void {
    // Navigate back without saving
    this.router.navigate(['/utilisateurs']);
  }
}
