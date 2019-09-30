import { Component } from '@angular/core';

import { DataService } from "./services/data.service";
import { Collegue } from './models/Collegue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {


  actionSub: Subscription;
  objetCollegue: Collegue = null;


  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this.actionSub = this._dataService.subCollegueConnectObs.subscribe(collegue => this.objetCollegue = collegue);

  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }
}
