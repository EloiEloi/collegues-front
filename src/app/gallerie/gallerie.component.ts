import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  


  //listePhotos = this._dataService.chercherPhotos();
  listePhotos = [
    {photoUrl : 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png', matricule : '12th34567th891rvsfsgrs'}, 
    {photoUrl : 'https://vignette.wikia.nocookie.net/billy-judd/images/b/b8/215px-Maggie.png/revision/latest?cb=20160527103511', matricule : 'aze12earerezrh8rvsfsgrs'}, 
    {photoUrl : 'https://p7.hiclipart.com/preview/373/100/42/milhouse-van-houten-bart-simpson-lisa-simpson-homer-simpson-marge-simpson-simpsons.jpg', matricule : 'adfth349df25d4zf2efsgrs'}, 
    {photoUrl : 'https://media.newyorker.com/photos/5a0dd9b7ae84d238abda66cb/master/w_649,c_limit/Hsu-Soft-Racism-of-Apu.jpg', matricule : '98h345000s0ds00zf0zf'},
    {photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUrxu05JyICpkYfh9AJf__FDxGD0OhCz-eg7RmiFFgSsdh9uQ', matricule : 'efthtb567th891rvsfsgrs'}

  ]

  constructor(private _dataService: DataService) { }

  
  afficherDetail(matricule:string) {
    console.log(matricule)
  }


  ngOnInit() {
  }

}
