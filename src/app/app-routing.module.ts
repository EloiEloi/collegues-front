import { Routes } from '@angular/router';
import { GallerieComponent } from "./gallerie/gallerie.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AuthentificationComponent } from './authentification/authentification.component';
import { AproposComponent } from "./apropos/apropos.component";



export const ROUTES: Routes = [
  { path: 'login', component: AuthentificationComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'a-propos', component: AproposComponent },

  // redirection par défault vers /accueil
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];