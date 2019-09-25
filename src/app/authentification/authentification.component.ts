import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {



  constructor(private _dataService: DataService) {

  }

  authentifier(identifiant: string, password: string) {
    this._dataService.connexionAuthentification(identifiant, password)
    return false;
  }

  ngOnInit() {
  }

}
