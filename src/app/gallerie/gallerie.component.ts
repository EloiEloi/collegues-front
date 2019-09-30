import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Photo } from '../models/Photo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhotos: Photo[] = [];


  constructor(private _dataService: DataService) { }


  afficherDetail(matricule: string) {
    console.log(matricule)
  }


  ngOnInit() {
    this._dataService.recupererPhotosDeTousLesCollegues().subscribe((liste) => this.listePhotos = liste);
  }

}
