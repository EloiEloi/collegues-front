import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { mockMatricules } from "../mock/matricule.mocks";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject, interval, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subAuth = new BehaviorSubject<boolean>(false);

  private listeMatricule: string[] = mockMatricules;

  constructor(private _http: HttpClient) {
  }

  connexionAuthentification(identifiant: string, password: string) {
    console.log(`demande authentification avec login : ${identifiant}, et password : ${password}`);

    // Options de la requête HTTP
    // ici le corps de la requête sera du JSON
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      withCredentials: true
    };

    this._http.post(`${environment.backendUrl}auth`, { login: identifiant, mdp: password }, httpOptions)
      .subscribe((data: any) => {
        console.log("ok", data);
        this.subAuth.next(true);
      }, (error: HttpErrorResponse) => {
        this.subAuth.next(false);
        console.log("error", error);
      });
  }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
    return this.listeMatricule;
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return null;
  }
}
