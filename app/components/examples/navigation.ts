import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';

@Component({
  selector: 'navigation-component',
  templateUrl: './components/examples/navigation.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class NavigationCmp {
  constructor(
    private _location: Location
  ) {}

  isActive(item): boolean {
    let regExp = new RegExp(item, 'gi');

    return !!this._location.path().match(regExp);
  }
}
