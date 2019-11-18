import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AuthGuard#canActivate called');
    return this.checkLogin();
    // return true;
  }

  checkLogin(): boolean {
    const userDetails = sessionStorage.getItem('email');
    if (userDetails) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
