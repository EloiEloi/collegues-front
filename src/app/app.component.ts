import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { mockCollegue } from "./mock/mock";
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.Component.html',
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  styles: []
})
export class AppComponent {
  title = 'Administration collegues-front';

  objetCollegue = mockCollegue;
  authentificationIsOk: boolean = false;

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.subAuth.subscribe(val => this.authentificationIsOk = val);
  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subAuth.unsubscribe();
  }
}
