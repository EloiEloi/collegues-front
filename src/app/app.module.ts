import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { mockCollegue } from "./mock/mock";
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  mockCollegue = mockCollegue;
}
