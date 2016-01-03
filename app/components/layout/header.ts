import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';

@Component({
  selector: 'header-component',
  templateUrl: './components/layout/header.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class HeaderCmp {
  constructor(
    private _location: Location
  ) {}

  isActive(item): boolean {
    let regExp = new RegExp(item, 'gi');

    return !!this._location.path().match(regExp);
  }
}
