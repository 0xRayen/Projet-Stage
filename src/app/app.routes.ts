import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PersonnelFormComponent } from './Forms/personnel-form/personnel-form.component';
import { CatPersonnelFormComponent } from './Forms/cat-personnel-form/cat-personnel-form.component';
import { ArticleFormComponent } from './Forms/article-form/article-form.component';
import { OperatorFormComponent } from './Forms/operator-form/operator-form.component';
import { ChantierFormComponent } from './Forms/chantier-form/chantier-form.component';
import { JournauxPageComponent } from './Pages/journaux-page/journaux-page.component';
import { ChantiersPageComponent } from './Pages/chantiers-page/chantiers-page.component';
import { CategoriesPageComponent } from './Pages/categories-page/categories-page.component';
import { PersonnelPageComponent } from './Pages/personnel-page/personnel-page.component';
import { UtilisateursPageComponent } from './Pages/utilisateurs-page/utilisateurs-page.component';
import { ArticlesPageComponent } from './Pages/articles-page/articles-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { JournauxListComponent } from './Lists/journaux-list/journaux-list.component';
import { ChantiersListComponent } from './Lists/chantiers-list/chantiers-list.component';
import { CategoriesListComponent } from './Lists/categories-list/categories-list.component';
import { ArticlesListComponent } from './Lists/articles-list/articles-list.component';
import { PersonnelListComponent } from './Lists/personnel-list/personnel-list.component';
import { UtilisateursListComponent } from './Lists/utilisateurs-list/utilisateurs-list.component';
import { JournalFormComponent } from './Forms/journal-form/journal-form.component';
import { JournauxTicketComponent } from './Tickets/journaux-ticket/journaux-ticket.component';
import { PersonnelTicketComponent } from './Tickets/personnel-ticket/personnel-ticket.component';
import { ChantiersTicketComponent } from './Tickets/chantiers-ticket/chantiers-ticket.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'personnel/form',
    component: PersonnelFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'journal/form',
    component: JournalFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cat_personnel',
    component: CatPersonnelFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/form',
    component: ArticleFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'utilisateurs/form',
    component: OperatorFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chantiers/form',
    component: ChantierFormComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'journaux',
    component: JournauxPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: JournauxListComponent,
        children: [{ path: '', component: JournauxTicketComponent }],
      }, // Default route for Journaux page
    ],
  },
  {
    path: 'chantiers',
    component: ChantiersPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ChantiersListComponent,
        children: [{ path: '', component: ChantiersTicketComponent }],
      }, // Default route for Journaux page
    ],
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoriesListComponent }, // Default route for Journaux page
    ],
  },
  {
    path: 'articles',
    component: ArticlesPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ArticlesListComponent }, // Default route for Journaux page
    ],
  },
  {
    path: 'personnel',
    component: PersonnelPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PersonnelListComponent,
        children: [{ path: '', component: PersonnelTicketComponent }],
      },
    ],
  },
  {
    path: 'utilisateurs',
    component: UtilisateursPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UtilisateursListComponent }, // Default route for Journaux page
    ],
  },
];
