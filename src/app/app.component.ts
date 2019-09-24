import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { mockCollegue } from "./mock/mock";

@Component({
  selector: 'app-root',
  templateUrl: 'app.Component.html',
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  styles: []
})
export class AppComponent {
  title = 'collegues-front';

  objetCollegue = mockCollegue;
  authentificationIsOk: boolean = false;

  constructor() {

  }
}
