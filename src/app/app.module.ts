import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';



import { AccueilComponent } from './accueil/accueil.component';

import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from "./app-routing.module";

// import des icons de Feather icons
import { FeatherModule } from 'angular-feather';
import { Search, Github, User, LogOut } from 'angular-feather/icons';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



const icons = {
  Search,
  Github,
  User,
  LogOut
};

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    AuthentificationComponent,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule, FeatherModule.pick(icons), RouterModule.forRoot(ROUTES)
  ],
  exports: [
    FeatherModule,
    AccueilComponent
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
