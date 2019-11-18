import { GviveService } from './gvive.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gvive';
  loggedIn = false;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private gviveService: GviveService
  ) {
    this.gviveService.showMenu.subscribe(
      (value: boolean) => (this.loggedIn = value)
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.gviveService.showMenu.emit(false);
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
}
