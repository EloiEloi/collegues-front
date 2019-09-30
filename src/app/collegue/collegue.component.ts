import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  actionSub: Subscription;

  isModificationEnCours = false;
  isCreationEnCours = false;
  boutonIsDisabled = false;

  collegueTemp: Collegue;

  constructor(private _dataService: DataService) { }

  /**
   *
   *
   * @memberof CollegueComponent
   */
  creerCollegueTempCopie() {
    this.collegueTemp = { ...this.col };
    this.col = this.collegueTemp;
  }
  creerCollegueTempVide() {
    this.collegueTemp = new Collegue(null, null, null, null, null, 'http://');
    this.col = this.collegueTemp;
  }

  setEtatModifiable(etat: boolean) {
    this.creerCollegueTempCopie();
    this.isModificationEnCours = etat;
  }

  setEtatCreation(etat: boolean) {
    this.creerCollegueTempVide();
    this.isCreationEnCours = etat;
  }

  setBoutonIsDisabled(etat: boolean) {
    this.boutonIsDisabled = etat;
  }

  annulerEtats() {
    this.setBoutonIsDisabled(false);
    this.setEtatCreation(false);
    this.setEtatModifiable(false);
    this.actionSub = this._dataService.subCollegueConnectObs.subscribe(collegue => this.col = collegue)

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
    this._dataService.subCollegueConnecteAction(this.col);
    this.setBoutonIsDisabled(true);
    this._dataService.enregistrerModificationCollegueCourant().subscribe(() => this.annulerEtats(), (error) => console.log(error));
  }

  validerCreationCollegue() {
    this._dataService.subCollegueConnecteAction(this.col);
    console.log("this.col --> ", this.col);
    this.setBoutonIsDisabled(true);
    this._dataService.enregistrerNouveauCollegueCourant().subscribe(() => this.annulerEtats(), (error) => console.log(error));
  }

  ngOnInit() {
    this.actionSub = this._dataService.subCollegueConnectObs.subscribe();
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }

}
