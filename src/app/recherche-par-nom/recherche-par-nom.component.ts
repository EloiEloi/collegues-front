import { Component, OnInit, Input } from '@angular/core';
import { mockMatricules } from "../mock/matricule.mocks";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  rechercheIsFinie: boolean = false;

  maListe: any[] = [];

  constructor() { }

  rechercherCollegueParNom() {
    this.maListe = mockMatricules;
    console.log("recherche collegue par nom")
  }

  ngOnInit() {
  }

}
