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


  //validerIsVisible: boolean = false;
  //creerIsVisible: boolean = true;
  //modifierIsVisible: boolean = true;

  isModificationEnCours = false;
  isCreationEnCours = false;

  isReadonly: boolean = true;
  //isCreate: boolean = false;

  constructor(private _dataService: DataService) {

  }

  setEtatModifiable(etat: boolean) {
    this.isReadonly = !etat;
    this.isModificationEnCours = etat;
  }

  setEtatCreation(etat: boolean) {
    this.isReadonly = !etat;
    this.isCreationEnCours = etat;
    this.isReadonly = !etat;

  }

  annulerEtats() {
    this.setEtatCreation(false);
    this.setEtatModifiable(false);
  }

  modifierCollegue() {
    this.annulerEtats()
    this.setEtatModifiable(true);

  }

  creerCollegue() {
    this.setEtatCreation(true);

  }


  validerModificationCollegue() {
    this.annulerEtats();
    this._dataService.modifierCollegueCourant();

  }

  validerCreationCollegue() {
    this.annulerEtats();
  }

  ngOnInit() {
    this._dataService.subCollegueConnecte.subscribe();
  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subCollegueConnecte.unsubscribe();
  }

}
