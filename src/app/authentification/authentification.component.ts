import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  authentifier(identifiant: string, password: string) {
    this._dataService.connexionAuthentification(identifiant, password).subscribe(() => this._router.navigate(['/accueil']));
    return false;
  }

  ngOnInit() {
  }

}
