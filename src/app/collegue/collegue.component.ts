import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  validerIsVisible: boolean = false;
  creerIsVisible: boolean = true;
  modifierIsVisible: boolean = true;


  constructor(private _dataService: DataService) {

  }



  modifierCollegue() {
    this.validerIsVisible = true;
    this.modifierIsVisible = false;
    this.creerIsVisible = false;
  }

  creerCollegue() {
    console.log("creer");
  }

  validerCreationCollegue() {

    console.log("creer");
  }

  ngOnInit() {
    this._dataService.subCollegueConnecte.subscribe();
  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subCollegueConnecte.unsubscribe();
  }

}
