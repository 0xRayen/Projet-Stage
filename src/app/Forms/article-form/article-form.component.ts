import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent {
  // Form data model
  article = {
    libelle: '',
    sousDetail: '',
    unite: '',
    quantiteUnitaire: '',
    prixUnitaire: '',
  };

  // Sample data for dropdown
  categories: string[] = ['Unité 1', 'Unité 2', 'Unité 3'];

  constructor(private router: Router) {}

  /**
   * Method to handle form submission
   */
  submitForm(): void {
    console.log('Article Data:', this.article);

    // Example: You can send the data to a service for backend integration
    // this.articleService.saveArticle(this.article).subscribe(response => {
    //   console.log('Article saved successfully:', response);
    // });

    // Navigate to another page or reset the form after submission
    this.router.navigate(['/articles']);
  }

  /**
   * Method to cancel the form and navigate back to the previous page
   */
  cancelForm(): void {
    this.router.navigate(['/articles']);
  }
}
