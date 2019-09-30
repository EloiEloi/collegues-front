import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Photo } from '../models/Photo';
import { Collegue } from '../models/Collegue';



@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhotos: Photo[] = [];
  collegueGalerie: Collegue = undefined;

  constructor(private _dataService: DataService) { }


  afficherDetail(matricule: string) {
    this._dataService.recupererCollegueAutrui(matricule).subscribe((collegue) => this.collegueGalerie = collegue)
  }


  ngOnInit() {
    this._dataService.recupererPhotosDeTousLesCollegues().subscribe((liste) => this.listePhotos = liste);
  }

}
