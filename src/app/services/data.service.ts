import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { mockMatricules } from "../mock/matricule.mocks";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listeMatricule: string[] = mockMatricules;



  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
    
    return this.listeMatricule;
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return null;
  }
}
