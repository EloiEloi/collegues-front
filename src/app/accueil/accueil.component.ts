import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  objetCollegue: Collegue = null;
 

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.subCollegueConnecte.subscribe(collegue => this.objetCollegue = collegue);

  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subCollegueConnecte.unsubscribe();
  }

}
