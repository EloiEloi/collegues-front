import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

/**
 *
 *
 * @export
 * @class CollegueComponent
 * @implements {OnInit}
 */
/**
 *
 *
 * @export
 * @class CollegueComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  //dateToday = Date.now();
  myDate;

  isModificationEnCours = false;
  isCreationEnCours = false;
  boutonIsDisabled = false;

  collegueBackUp: Collegue;

  constructor(private _dataService: DataService) { }

  /**
   *
   *
   * @memberof CollegueComponent
   */
  creerCollegueBackUp() {
    this.collegueBackUp = { ...this.col };
    this.col = this.collegueBackUp;
  }

  setEtatModifiable(etat: boolean) {
    this.creerCollegueBackUp();
    this.isModificationEnCours = etat;
  }

  setEtatCreation(etat: boolean) {
    this.creerCollegueBackUp();
    this.isCreationEnCours = etat;
  }

  setBoutonIsDisabled(etat: boolean) {
    this.boutonIsDisabled = etat;
  }

  annulerEtats() {
    this.setBoutonIsDisabled(false);
    this.setEtatCreation(false);
    this.setEtatModifiable(false);
    this._dataService.subCollegueConnecte.subscribe(collegue => this.col = collegue);
  }

  modifierCollegue() {
    this.annulerEtats()
    this.setEtatModifiable(true);
  }

  creerCollegue() {
    this.annulerEtats()
    this.setEtatCreation(true);
  }

  validerModificationCollegue() {
    this._dataService.subCollegueConnecte.next(this.col);
    this.setBoutonIsDisabled(true);
    this._dataService.enregistrerModificationCollegueCourant().subscribe(() => this.annulerEtats(), (error) => console.log(error));
  }

  validerCreationCollegue() {
    this._dataService.subCollegueConnecte.next(this.col);
    console.log("this.col --> ", this.col);
    this.setBoutonIsDisabled(true);
    this._dataService.enregistrerNouveauCollegueCourant().subscribe(() => this.annulerEtats(), (error) => console.log(error));
  }

  ngOnInit() {
    this._dataService.subCollegueConnecte.subscribe();
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this._dataService.subCollegueConnecte.unsubscribe();
  }

}
