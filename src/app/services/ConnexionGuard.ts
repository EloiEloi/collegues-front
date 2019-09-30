import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from './data.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {

    constructor(private router: Router, private _dataService: DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login

        return this._dataService.verifierAuthConnecte().pipe(
            map(() => true),
            catchError((error) => of(this.router.parseUrl('login'))
            )
        );

       
    }
}