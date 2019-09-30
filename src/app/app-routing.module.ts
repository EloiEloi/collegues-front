import { Routes } from '@angular/router';
import { GallerieComponent } from "./gallerie/gallerie.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AuthentificationComponent } from './authentification/authentification.component';
import { AproposComponent } from "./apropos/apropos.component";
import { ConnexionGuard } from './services/ConnexionGuard';



export const ROUTES: Routes = [
  { path: 'login', component: AuthentificationComponent },


  {
    path: '',
    canActivate: [ConnexionGuard],
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'gallerie', component: GallerieComponent },
      { path: 'a-propos', component: AproposComponent }
    ]
  }
];