import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-personnel-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './cat-personnel-form.component.html',
  styleUrls: ['./cat-personnel-form.component.css'],
})
export class CatPersonnelFormComponent {
  // Form data model
  category = {
    libelle: '',
    tauxHoraire: '',
  };

  constructor(private router: Router) {}

  /**
   * Method to handle form submission
   */
  submitForm(): void {
    console.log('Category Data:', this.category);

    // Example: You can send the data to a service for backend integration
    // this.categoryService.saveCategory(this.category).subscribe(response => {
    //   console.log('Category saved successfully:', response);
    // });

    // Navigate to another page or reset the form after submission
    this.router.navigate(['/personnel/form']);
  }

  /**
   * Method to cancel the form and navigate back to the previous page
   */
  cancelForm(): void {
    this.router.navigate(['/personnel/form']);
  }
}
