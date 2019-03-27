import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private service: AuthServiceService,
        private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(next, state);
    }

}
