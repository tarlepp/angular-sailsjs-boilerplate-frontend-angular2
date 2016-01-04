// Angular2 specified stuff
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';

// Component setup
@Component({
  selector: 'navigation-component',
  templateUrl: './components/examples/navigation.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

// Actual component class
export class NavigationCmp {
  constructor(
    private _location: Location
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
}
