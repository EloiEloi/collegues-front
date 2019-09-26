import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { mockMatricules } from "../mock/matricule.mocks";
import { Collegue } from '../models/Collegue';
import { map, flatMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // subAuth = new BehaviorSubject<boolean>(false);
  subCollegueConnecte = new BehaviorSubject<Collegue>(new Collegue(undefined, undefined, undefined, undefined, undefined, undefined));

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    withCredentials: true
  };


  private listeMatricule: string[] = mockMatricules;

  constructor(private _http: HttpClient) {

    interface Post {
      matricule: string;
      nom: string;
      prenom: string;
      email: string;
      ddn: string;
      photoUrl: string;
    }

    // test similuant le test de la presence du cookie d'authentification afin de ne pas redemander le login & mot de passe
    // en faisant une requete necessitant une authorisation, si reponse negative alors c est = pas de cookie, si reponse ok = on a le cookie
    this._http.get(`${environment.backendUrl}auth/user`, this.httpOptions)
      .pipe(
        flatMap((user: any) => this.recupererCollegueCourant(user.matricule))
      )
      .subscribe(collegueConnecte => {
        // on est déjà connecté (le cookie est bien présent)
        // on récupère donc le collegue avec les infos récupérées

        this.subCollegueConnecte.next(collegueConnecte);
      });
  }




  connexionAuthentification(identifiant: string, password: string) {
    this._http.post(`${environment.backendUrl}auth`, { login: identifiant, mdp: password }, this.httpOptions)
      .subscribe(() => {
        this._http.get(`${environment.backendUrl}auth/user`, this.httpOptions)
          .pipe(
            flatMap((user: any) => this.recupererCollegueCourant(user.matricule))
          )
          .subscribe(collegueConnecte => {
            // on est déjà connecté (le cookie est bien présent)
            // on récupère donc le collegue avec les infos récupérées

            this.subCollegueConnecte.next(collegueConnecte);
          });


      }, (error: HttpErrorResponse) => {


        console.log("error", error);
      });
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${environment.backendUrl}collegues?nom=${nom}`, this.httpOptions)
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> | null {

    let collegue: Collegue = null;
    return this._http.get(`${environment.backendUrl}collegues/${matricule}`, this.httpOptions)
      .pipe(map((data: any) => new Collegue(data.matricule, data.nom, data.prenom, data.email, data.ddn, data.photoUrl)))

  }

  modifierCollegueCourant(): Observable<Collegue> {
    const collegue = this.subCollegueConnecte;
    console.log(collegue);
    return null;
    //return this._http.patch<string[]>(`${environment.backendUrl}collegues/${matricule}`, { collegue }, this.httpOptions)
  }
}
