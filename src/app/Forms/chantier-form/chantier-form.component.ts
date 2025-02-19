import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-chantier-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './chantier-form.component.html',
  styleUrls: ['./chantier-form.component.css'], // Optional: Use this for custom styles if needed
})
export class ChantierFormComponent {
  // Form data model
  chantier = {
    nomChantier: '',
    nomMaitreOuvrage: '',
    delaiDebut: '',
    delaiFin: '',
    debutHoraires: '',
    finHoraires: '',
    responsable: '',
    categories: '',
  };

  // Sample data for dropdowns
  maitres: string[] = [
    'Maitre Ouvrage 1',
    'Maitre Ouvrage 2',
    'Maitre Ouvrage 3',
  ];
  responsables: string[] = ['Responsable 1', 'Responsable 2', 'Responsable 3'];
  tempsDuJour: string[] = [
    'Beau',
    'nuageux',
    'pluvieux',
    'ensoleillé',
    'orageux',
  ];

  constructor(private router: Router) {}

  async createFormJournal() {
    const response: any = await axios.post(
      'http://localhost:3000/projet/create',
      this.chantier
    );
    const statusCode: number = response.status;
    if (statusCode === 200) {
      alert('Journal a été créé avec succès');
    } else {
      console.error('Echec de création du journal');
    }
  }

  async submitForm() {
    await this.createFormJournal();
    this.router.navigate(['/chantiers']);
  }

  /**
   * Method to cancel the form and navigate back to the previous page
   */
  cancelForm() {
    this.router.navigate(['/chantiers']); // Adjust the route as needed
  }

  /**
   * Method to handle the "Affecter Catégorie" button click
   */
  affecterCategorie() {
    console.log('Navigating to Affecter Catégorie form...');
    this.router.navigate(['/categories']); // Replace with the actual route to the categories form
  }
}
