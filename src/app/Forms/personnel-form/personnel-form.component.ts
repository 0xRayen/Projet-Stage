import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-personnel-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.css'],
})
export class PersonnelFormComponent {
  // Form data model
  personnel = {
    name: '',
    category: '',
    cin: '',
    assignedSites: '',
  };

  // Sample data for dropdowns
  categories: string[] = ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'];
  sites: string[] = ['Chantier 1', 'Chantier 2', 'Chantier 3'];

  constructor(private router: Router) {}

  async addStaff() {
    const response = await axios.post(
      'http://localhost:3000/staff/create',
      this.personnel
    );
    if (response.status === 200) {
      alert('Personnel ajouté avec succés');
    } else {
      alert("L'ajoutation du personnel a ete echoué");
    }
  }
  async submitForm(): Promise<void> {
    await this.addStaff();
    this.router.navigate(['/personnel']);
  }

  /**
   * Method to cancel the form and navigate back to the previous page
   */
  cancelForm(): void {
    this.router.navigate(['/personnel']);
  }

  /**
   * Method to handle the "Ajouter Catégorie" button click
   */
  cat_form(): void {
    console.log('Navigating to Ajouter Catégorie form...');
    this.router.navigate(['/cat_personnel']);
  }
}
