import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

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


  constructor() {


  }

  modifierCollegue() {
    this.validerIsVisible = true;
    this.modifierIsVisible = false;
    this.creerIsVisible = false;
    console.log("modifier");

  }

  creerCollegue() {
    console.log("creer");
  }

  validerCreationCollegue() {

    console.log("creer");
  }

  ngOnInit() {
  }

}
