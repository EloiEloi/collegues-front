import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  authentification;

  constructor() { }

  authentifier(login: string, password: string) {
    console.log(login, password);
    return false;
  }

  ngOnInit() {
  }

}
