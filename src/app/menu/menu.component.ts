import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() col: Collegue;

  constructor() { }


  logOut() {
    console.log("logout")
  }

  ngOnInit() {
  }

}
