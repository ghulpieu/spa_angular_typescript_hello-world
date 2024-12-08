import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
})
export class NavBarButtonsComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private _auth: AuthService) {}

  get auth() {
    return this._auth;
  }
}
