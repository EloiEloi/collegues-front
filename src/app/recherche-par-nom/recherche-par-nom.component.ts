import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  rechercheIsFinie: boolean = false;

  maListe: string[] = [];

  constructor(private _dataService: DataService) { }

  rechercherCollegueParNom(nom: string) {
    this._dataService.rechercherParNom(nom).subscribe((list => this.maListe = list));
    //this.maListe = this._dataService.rechercherParNom(nom);

  }

  ngOnInit() {
  }

}
