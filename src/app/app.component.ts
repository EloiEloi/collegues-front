import { Component } from '@angular/core';

import { DataService } from "./services/data.service";
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: 'app.Component.html',
  styles: []
})
export class AppComponent {


  //objetCollegue = mockCollegue;
  objetCollegue: Collegue = null;
  //authentificationIsOk: boolean = false;

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.subCollegueConnecte.subscribe(collegue => this.objetCollegue = collegue);

  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subCollegueConnecte.unsubscribe();
  }
}
