import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  objetCollegue: Collegue = null;
  actionSub: Subscription;


  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.actionSub = this._dataService.subCollegueConnectObs.subscribe(collegue => this.objetCollegue = collegue);

  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }

}
