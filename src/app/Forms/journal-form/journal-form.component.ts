import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-journal-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-form.component.html',
  styleUrl: './journal-form.component.css',
})
export class JournalFormComponent {
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

  /**
   * Method to handle form submission
   *
   *
   */
  async createFormJournal() {
    const response: any = await axios.post(
      'http://localhost:3000/rapport/create',
      this.chantier
    );
    const statusCode: number = response.status;
    if (statusCode === 200) {
      alert('Journal a été créé avec succès');
    } else {
      console.error('Echec de création du journal');
    }
  }
  
  async submitForm(): Promise<void> {
    await this.createFormJournal();
    this.router.navigate(['/journaux']);
  }

  /**
   * Method to cancel the form and navigate back to the previous page
   */
  cancelForm() {
    this.router.navigate(['/journaux']); // Adjust the route as needed
  }

  /**
   * Method to handle the "Affecter Catégorie" button click
   */
  affecterCategorie() {
    console.log('Navigating to Affecter Catégorie form...');
    this.router.navigate(['/categories']); // Replace with the actual route to the categories form
  }
}
