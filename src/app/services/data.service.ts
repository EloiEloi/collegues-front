import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { mockMatricules } from "../mock/matricule.mocks";
import { Collegue } from '../models/Collegue';
import { map, flatMap, tap } from 'rxjs/operators';
import { Photo } from '../models/Photo';



@Injectable({
  providedIn: 'root'
})
export class DataService {



  private _subCollegueConnecte = new BehaviorSubject<Collegue>(new Collegue(undefined, undefined, undefined, undefined, undefined, undefined));

  get subCollegueConnectObs() {
    return this._subCollegueConnecte.asObservable();
  }

  subCollegueConnecteAction(collegue: Collegue) {
    this._subCollegueConnecte.next(collegue);
  }



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

  }


  verifierAuthConnecte(): Observable<Collegue> {

    return this._http.get(`${environment.backendUrl}auth/user`, this.httpOptions)
      .pipe(
        flatMap((user: any) => this.recupererCollegueCourant(user.matricule)),
        tap(collegueConnecte => {
          // on est déjà connecté (le cookie est bien présent)
          // on récupère donc le collegue avec les infos récupérées
          this._subCollegueConnecte.next(collegueConnecte);
        })
      );
  }


  connexionAuthentification(identifiant: string, password: string) {
    let isAuthentifie = false;
    return this._http.post(`${environment.backendUrl}auth`, { login: identifiant, mdp: password }, this.httpOptions)
      .pipe(
        flatMap(() => this._http.get(`${environment.backendUrl}auth/user`, this.httpOptions)),
        flatMap((user: any) => this.recupererCollegueCourant(user.matricule)),
        tap(collegueConnecte => {
          // on est déjà connecté (le cookie est bien présent)
          // on récupère donc le collegue avec les infos récupérées
          this._subCollegueConnecte.next(collegueConnecte);
        })
      );
  }


  rechercherParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${environment.backendUrl}collegues?nom=${nom}`, this.httpOptions)
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> | null {
    return this._http.get(`${environment.backendUrl}collegues/${matricule}`, this.httpOptions)
      .pipe(
        map((data: any) => new Collegue(data.matricule, data.nom, data.prenom, data.email, data.ddn, data.photoUrl)),
        tap(collegueConnecte => { this._subCollegueConnecte.next(collegueConnecte); })
      );
  }


  recupererCollegueAutrui(matricule: string): Observable<Collegue> {
    return this._http.get(`${environment.backendUrl}collegues/${matricule}`, this.httpOptions)
      .pipe(
        map((data: any) => new Collegue(data.matricule, data.nom, data.prenom, data.email, data.ddn, data.photoUrl))
      );
  }

  /**
   * function qui enregistre les modifications effectuées sur le collegue dans la bdd
   *
   * @returns {Observable<Collegue>}
   * @memberof DataService
   */
  enregistrerModificationCollegueCourant(): Observable<Collegue> {
    const collegue = this._subCollegueConnecte.value;
    return this._http.patch<Collegue>(`${environment.backendUrl}collegues/${collegue.matricule}`, collegue, this.httpOptions).pipe(tap((collegue) => this._subCollegueConnecte.next(collegue)));
  }

  /**
   * function qui enregistre le nouveau collegue créé qui se trouve dans le subject
   *
   * @memberof DataService
   */
  enregistrerNouveauCollegueCourant() {
    const collegue = this._subCollegueConnecte.value;

    return this._http.post<Collegue>(`${environment.backendUrl}collegues/`, collegue, this.httpOptions).pipe(tap((collegue) => this._subCollegueConnecte.next(collegue)));
  }

  recupererPhotosDeTousLesCollegues(): Observable<Photo[]> {
    return this._http.get<Photo[]>(`${environment.backendUrl}collegues/photos`, this.httpOptions);
  }


}
