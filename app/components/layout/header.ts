// Angular2 specified stuff
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES,} from 'angular2/common';
import {ROUTER_DIRECTIVES, Location, Router} from 'angular2/router';

// 3rd party libraries
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// Component setup
@Component({
  selector: 'header-component',
  templateUrl: './components/layout/header.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

// Actual component class
export class HeaderCmp {
  constructor(
    private _location: Location,
    private _router: Router
  ) {}

  /**
   * Function to check if specified path is active or not.
   *
   * @param   {string}  path
   * @returns {boolean}
   */
  isActive(path: string): boolean {
    let regExp = new RegExp(path, 'gi');

    return !!this._location.path().match(regExp);
  }

  /**
   * Function to check if current user is authorized or not.
   *
   * @returns {boolean}
   */
  authorized(): boolean {
    return tokenNotExpired();
  }

  /**
   * Function to 'logout' current user. This will just basically remove all items from local storage, where user and
   * actual JWT data exists.
   *
   * @todo add some kind of spinner.
   *
   * @param {Event} event
   */
  logout(event) {
    event.preventDefault();

    localStorage.clear();

    this._router.navigate(['/About']).then(() => {
      console.log('logged out successfully');
    });
  }
}
