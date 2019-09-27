import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { mockCollegue } from "./mock/mock";
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // mockCollegue = mockCollegue;
}
